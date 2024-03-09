const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardcontroller');
const { verifyToken } = require('../config/jwtconfig'); 
const noCache = require('../utils/nocache');
const { handleErrors } = require('../utils/errorhandler'); 


router.get('/', verifyToken, noCache,  dashboardController.renderDashboard, handleErrors);

module.exports = router;
