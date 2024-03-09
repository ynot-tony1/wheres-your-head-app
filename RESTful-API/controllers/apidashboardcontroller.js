const { queryDatabase } = require('../config/dbconn');

exports.getUserDetails = async (req, res) => {
    const { userId } = req.params; 
    try {
        const userQuery = `
            SELECT users.user_id, users.user_name, users.email, users.last_login, users.previous_login, city.city_name
            FROM users
            JOIN user_address ON users.user_id = user_address.user_id
            JOIN city ON user_address.city_id = city.city_id
            WHERE users.user_id = ?
        `;
        const userDetails = await queryDatabase(userQuery, [userId]);
        if (userDetails.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }

        res.json({
            status: 'success',
            data: userDetails[0] 
        });
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch user details',
            error: error.message
        });
    }
};

