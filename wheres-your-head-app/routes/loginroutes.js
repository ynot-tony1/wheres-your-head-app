
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontroller.js'); 
const { validateLoginForm } = require('../utils/serversideformval.js');
const { handleErrors } = require('../utils/errorhandler'); 

router.get('/login',  loginController.renderLogin, handleErrors);


router.post('/login', validateLoginForm, loginController.handleLogin, handleErrors);


router.post('/logout',  loginController.handleLogout, handleErrors);

module.exports = router;
