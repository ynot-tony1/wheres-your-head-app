const express = require('express');
const router = express.Router();
const apiStatsController = require('../controllers/apistatscontroller');


router.get('/chart/:userId', apiStatsController.getEmotionDataByUserId);
router.get('/enjoyment/:userId', apiStatsController.getAverageEnjoymentPerDay);
router.get('/surprise/:userId', apiStatsController.getAvgSurprisePerDay);
router.get('/sadness/:userId', apiStatsController.getAvgSadnessPerDay);


module.exports = router;