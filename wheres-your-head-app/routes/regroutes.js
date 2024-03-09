const express = require('express');
const router = express.Router();
const regController = require('../controllers/regcontroller'); 
const { validateRegisterForm, } = require('../utils/serversideformval');
const noCache = require('../utils/nocache');
const { handleErrors } = require('../utils/errorhandler'); 

router.get('/start', noCache, regController.renderRegister, handleErrors);
router.post('/register',noCache, validateRegisterForm, regController.handleRegister, handleErrors);

module.exports = router;
