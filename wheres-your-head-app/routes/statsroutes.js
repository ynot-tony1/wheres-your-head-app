const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statscontroller');
const { verifyToken } = require('../config/jwtconfig');
const noCache = require('../utils/nocache');
const { handleErrors } = require('../utils/errorhandler'); 


router.get('/', verifyToken, noCache, statsController.renderEmotionTrendsPage, handleErrors);

module.exports = router;
