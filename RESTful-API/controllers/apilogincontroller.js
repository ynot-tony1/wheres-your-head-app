const { queryDatabase } = require('../config/dbconn');

exports.loginUser = async (req, res) => {
    const { username } = req.body;
    try {
        const query = 'SELECT user_id, user_name, pass_word FROM users WHERE user_name = ? LIMIT 1';
        const results = await queryDatabase(query, [username]);

        if (results.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        const updateLoginQuery = `
            UPDATE users
            SET previous_login = last_login, 
                last_login = NOW()
            WHERE user_id = ?`;

        await queryDatabase(updateLoginQuery, [results[0].user_id]);
        res.status(200).json({ status: 'success', message: 'User found', data: results[0] });
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ status: 'error', message: 'Database query error', error });
    }
};






