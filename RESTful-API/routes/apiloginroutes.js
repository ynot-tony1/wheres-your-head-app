const express = require('express');
const router = express.Router();
const loginController = require('../controllers/apilogincontroller');

router.post('/login', loginController.loginUser);

module.exports = router;
