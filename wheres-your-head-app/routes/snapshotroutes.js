const express = require('express');
const router = express.Router();
const snapshotController = require('../controllers/snapshotcontroller');
const { verifyToken } = require('../config/jwtconfig'); 
const noCache = require('../utils/nocache');
const { handleErrors } = require('../utils/errorhandler'); 
const { validateSnapshotForm } = require('../utils/serversideformval');


router.get('/mysnaps', verifyToken, noCache,  snapshotController.getSnapshotsForCurrentUser, handleErrors);
router.get('/edit/:snapshotId', verifyToken, noCache, snapshotController.getUpdateSnapshotForm, handleErrors);
router.post('/update/:snapshotId', verifyToken, noCache, snapshotController.updateSnapshot, handleErrors);
router.get('/add', verifyToken, noCache,  snapshotController.displayAddSnapshotForm, handleErrors);
router.post('/add', verifyToken, noCache, validateSnapshotForm, snapshotController.addSnapshot, handleErrors);
router.delete('/delete/:snapshotId', verifyToken, noCache, snapshotController.deleteSnapshot, handleErrors);


module.exports = router;
