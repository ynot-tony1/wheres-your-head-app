const express = require('express');
const router = express.Router();
const indexcontroller = require('../controllers/indexcontroller'); 
const noCache = require('../utils/nocache.js');
const { handleErrors } = require('../utils/errorhandler'); 

router.get('/', noCache, indexcontroller.getIndex, handleErrors);

module.exports = router;