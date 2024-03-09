import { showSuccessMessage } from './jsmsghandlers/successmessagehandler.js';
import { showErrorMessage } from './jsmsghandlers/errormessagehandler.js';

document.addEventListener('click', event => {

     /* chatGPT assisted me with this function which deletes a snapshot by 
        retrieving the snapshot ID from the form action's URL, 
        disabling form elements upon submission
        in order to display error or success messages to the user after the fact */

    if (event.target.classList.contains('delete-snapshot')) {
        event.preventDefault();
        if (confirm('Are you sure you want to delete this snapshot?')) {
            const form = event.target.closest('form');
            const snapshotId = form.action.split('/').pop();
            Array.from(form.elements).forEach(element => element.disabled = true);
            axios.delete('/snaps/delete/' + snapshotId)
                .then(response => {
                    showSuccessMessage(response.data.message || 'Snapshot deleted successfully!', '/snaps/mysnaps');
                })
                .catch(error => {
                    console.error(error);
                    showErrorMessage('An error occurred. Please try again later.');
                });
        }
    }
});

