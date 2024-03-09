const axios = require('axios');
const bcrypt = require('bcryptjs');
const API_BASE_URL = 'http://localhost:3002';
const {renderErrorPage} = require('../utils/errorhandler');

exports.renderRegister = (req, res, next) => {
    axios.get(`${API_BASE_URL}/reg/start`)
        .then(response => {
            const countries = response.data.countries; 
            const cities = response.data.cities; 
            res.render('register', {
                errors: [],
                email: '',
                username: '',
                password: '',
                countries: countries, 
                cities: cities, 
                address_line: '',
                postal_code: '',
                confirm_password: ''
            });
        })
        .catch(error => {
            console.error("Error fetching countries:", error.message);
            renderErrorPage(res, 500, "Internal Server Error");
        });
};


exports.handleRegister = (req, res, next) => {
    const { email, username, password, city_id, address_line, postal_code } = req.body; 
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        return axios.post(`${API_BASE_URL}/reg/register`, {
            email,
            username,
            password: hashedPassword,
            city_id, 
            address_line,
            postal_code
        }, {
            validateStatus: (status) => status < 500
        });
    }).then(response => {
        if (response.status === 409) {
            console.error('Duplicate entry of email or username:', response.data.message);
            res.render('register', {
                errors: [{ msg: 'Sorry, that username or email is already in use, please try another one.' }],
                email,
                username,
                password: '',
                confirm_password: '',
                country_name, 
                city_name,
                address_line,
                postal_code
            });
        } else if (response.data.status === 'success') {
            res.render('successfulviews/regsuccess', {
                message: 'Registration successful, please log in.',
                redirectUrl: '/auth/login',
                delay: 1500 
            });
        } else {
            console.error('Registration error:', response.data.message);
            res.render('register', {
                errors: [{ msg: response.data.message }],
                email,
                username,
                password: '',
                confirm_password: '',
                country_name,
                city_name,
                address_line,
                postal_code
            });
        }
    }).catch((error) => {
        next(error);
    });
};
