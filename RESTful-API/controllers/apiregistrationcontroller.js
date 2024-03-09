const { queryDatabase } = require('../config/dbconn');

exports.renderRegisterData = async (req, res) => {
    try {
        const countries = await queryDatabase('SELECT * FROM country');
        const cities = await queryDatabase('SELECT * FROM city');
        res.json({
            countries,
            cities
        });
    } catch (error) {
        console.error('Database fetch error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch registration data', error });
    }
};

exports.registerUser = async (req, res) => {
    const { email, username, password: hashedPassword, country_id, city_id, address_line, postal_code } = req.body;

    try {
        await queryDatabase('START TRANSACTION');
        const userResult = await queryDatabase('INSERT INTO users (email, user_name, pass_word) VALUES (?, ?, ?)', [email, username, hashedPassword]);
        const userId = userResult.insertId;
        await queryDatabase('INSERT INTO user_address (user_id, city_id, address_line, postal_code) VALUES (?, ?, ?, ?)', [userId, city_id, address_line, postal_code]);
        await queryDatabase('COMMIT');
        res.status(200).json({ status: 'success', message: 'User and address registered successfully' });
    } catch (error) {
        await queryDatabase('ROLLBACK');
        console.error('Database insert error:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ status: 'error', message: 'Username, email, or address already exists' });
        } else {
            res.status(500).json({ status: 'error', message: 'Database insert error', error: error.message });
        }
    }
};

