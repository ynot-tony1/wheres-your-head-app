const express = require('express');
const router = express.Router();
const regController = require('../controllers/apiregistrationcontroller');

router.post('/register', regController.registerUser); 
router.get('/start', regController.renderRegisterData); 

module.exports = router;
