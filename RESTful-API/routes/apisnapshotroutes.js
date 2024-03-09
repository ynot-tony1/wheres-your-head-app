const express = require('express');
const router = express.Router();
const snapshotController = require('../controllers/apisnapshotcontroller');

router.get('/mysnaps/:userId', snapshotController.getAllSnapshotsByUserId);
router.get('/allsnapshots', snapshotController.getAllSnapshots);
router.get('/snapshot/:snapshotId', snapshotController.getEditSnapshotById);
router.put('/snapshot/:snapshotId', snapshotController.updateSnapshot);
router.post('/add', snapshotController.addNewSnapshot);
router.delete('/delete/:snapshotId', snapshotController.deleteSnapshot);


module.exports = router;