const express = require('express');
const router = express.Router();
const apidashboardController = require('../controllers/apidashboardcontroller');

router.get('/:userId',  apidashboardController.getUserDetails);

module.exports = router;
