const { queryDatabase } = require('../config/dbconn');

exports.getEditSnapshotById = async (req, res) => {
    const snapshotId = req.params.snapshotId;
    try {
        const result = await queryDatabase('SELECT * FROM emotion_snapshots WHERE snapshot_id = ?', [snapshotId]);
        if (result.length > 0) {
            res.status(200).json({ status: 'success', data: result[0] });
        } else {
            res.status(404).json({ status: 'error', message: 'Snapshot not found' });
        }
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch snapshot', error });
    }
};

exports.updateSnapshot = async (req, res) => {
    const snapshotId = req.params.snapshotId;
    const { contextual_triggers } = req.body; 
    try {
        await queryDatabase('UPDATE emotion_snapshots SET contextual_triggers = ? WHERE snapshot_id = ?', [contextual_triggers, snapshotId]);
        res.status(200).json({ status: 'success', message: 'Snapshot updated successfully' });
    } catch (error) {
        console.error('Database update error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to update snapshot', error });
    }
};

exports.getAllSnapshots = async (req, res) => {
    try {
        const results = await queryDatabase('SELECT * FROM emotion_snapshots');
        res.status(200).json({ status: 'success', data: results });
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ status: 'error', message: 'Database query error', error: error });
    }
};

exports.getAllSnapshotsByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const results = await queryDatabase('SELECT * FROM emotion_snapshots WHERE user_id = ? ORDER BY snap_created DESC', [userId]);
        if (results.length > 0) {
            res.status(200).json({ status: 'success', data: results });
        } else {
            res.status(404).json({ status: 'error', message: 'No snapshots found for this user.' });
        }
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch snapshots for user', error });
    }
};

exports.addNewSnapshot = async (req, res) => {
    const { user_id, enjoyment_level, sadness_level, anger_level, contempt_level, disgust_level, fear_level, surprise_level, contextual_triggers } = req.body;

    try {
        const insertQuery = `
            INSERT INTO emotion_snapshots (user_id, enjoyment_level, sadness_level, anger_level, contempt_level, disgust_level, fear_level, surprise_level, contextual_triggers)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await queryDatabase(insertQuery, [user_id, enjoyment_level, sadness_level, anger_level, contempt_level, disgust_level, fear_level, surprise_level, contextual_triggers]);
        res.status(201).json({ status: 'success', message: 'Snapshot added successfully' });
    } catch (error) {
        console.error('Database insert error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to add snapshot', error });
    }
};


exports.deleteSnapshot = async (req, res) => {
    const { snapshotId } = req.params; 

    try {
        const deleteQuery = 'DELETE FROM emotion_snapshots WHERE snapshot_id = ?';
        await queryDatabase(deleteQuery, [snapshotId]);
        res.json({ status: 'success', message: 'Snapshot deleted successfully' });
    } catch (error) {
        console.error('Database delete error:', error);
        if (error.code === '404') {
            res.status(404).json({ status: 'error', message: 'Snapshot not found' });
        } else {
            res.status(500).json({ status: 'error', message: 'Failed to delete snapshot', error });
        }
    }
};

