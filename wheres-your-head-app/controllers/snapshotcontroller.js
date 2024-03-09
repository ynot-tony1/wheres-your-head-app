const axios = require('axios');
const dateFormatter = require('../utils/dateformatter');
exports.getSnapshotsForCurrentUser = (req, res, next) => {
    const apiUrl = 'http://localhost:3002'; 
    const userId = res.locals.user.id;
    axios.get(`${apiUrl}/snaps/mysnaps/${userId}`, { validateStatus: (status) => { return status < 500; } })
        .then(response => {
            let snapshots = [];
            if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                snapshots = response.data.data.map(snapshot => ({
                    ...snapshot,
                    snap_created: dateFormatter(snapshot.snap_created),
                    snap_updated: dateFormatter(snapshot.snap_updated),
                }));
            } else if (Array.isArray(response.data.data) && response.data.data.length === 0) {
                const error = new Error('No snapshots found for the user');
                error.status = 404; 
                throw error;
            }
            res.render('snapshotview', { snapshots, user: res.locals.user.username, message: snapshots.length > 0 ? '' : 'No snapshots found, please click add on the top right of the screen to add one.' });
        })
        .catch((error) => {
            next(error);
        });
};


exports.getUpdateSnapshotForm = (req, res) => {
    const apiUrl = 'http://localhost:3002'; 
    const snapshotId = req.params.snapshotId;
    axios.get(`${apiUrl}/snaps/snapshot/${snapshotId}`, { validateStatus: (status) => { return status < 500 } })
    .then(response => {

        if (response.status === 404) {
            const error = new Error('No snapshots found for the user');
            error.status = 404; 
            throw error;
        }
        console.log(`Received data for editing snapshot, Snapshot ID: ${snapshotId}`, response.data);
        res.render('snapshotview', { snapshot: response.data.data });
    })
    .catch((error) => {
        next(error);
    });
    
};

exports.updateSnapshot = (req, res) => {
    const snapshotId = req.params.snapshotId;
    const updateData = req.body; 
    const apiUrl = 'http://localhost:3002'; 
    axios.put(`${apiUrl}/snaps/snapshot/${snapshotId}`, updateData, { validateStatus: (status) => { return status < 500 } 
    })
    .then(() => {
        res.redirect('/snaps/mysnaps'); 
    })
        .catch((error) => {
            next(error);
        });
};

exports.displayAddSnapshotForm = (req, res) => {
    res.render('addsnapshot', { user: res.locals.user || null });
};


exports.addSnapshot = (req, res, next) => {
    const apiUrl = 'http://localhost:3002/snaps/add'; 
    const userId = res.locals.user.id; 
    axios.post(apiUrl, 
        { user_id: userId, ...req.body }, { validateStatus: (status) => status < 500})
    .then(response => {
        if (response.status === 201) {
            res.status(201).json({ success: true, message: "Snapshot added successfully!" });
        } else {
            res.status(response.status).json({ success: false, error: 'Error adding snapshot. Please try again.' });
        }
    })
    .catch((error) => {
        next(error);
    });
};







// Controller
// Controller
exports.deleteSnapshot = (req, res, next) => {
    const { snapshotId } = req.params;
    const apiUrl = 'http://localhost:3002';

    axios.delete(`${apiUrl}/snaps/delete/${snapshotId}`, { validateStatus: (status) => { return status < 500; } })
        .then(response => {
            if (response.status === 200) {
                // Assuming the deletion was successful, redirect the user to the snapshots list
                res.status(200).json({ success: true, message: 'Snapshot deleted successfully' });
            } else if (response.status === 404) {
                // Snapshot not found
                console.error("Snapshot not found");
                return res.status(404).render("errorViews/404", {
                    message: response.data.message || "Snapshot not found.",
                    redirectUrl: '/stats',
                });
            } else {
                // The deletion did not succeed as expected
                res.status(response.status).json({ success: false, message: 'Snapshot could not be deleted' });
            }
        })
        .catch((error) => {
            // Pass the error to the next middleware function
            next(error);
        });
  
};