import { showSuccessMessage, hideSuccessMessage } from './jsmsghandlers/successmessagehandler.js';
import { showErrorMessage } from './jsmsghandlers/errormessagehandler.js';

document.getElementById('add-snapshot-form').addEventListener('submit', (event) => {
    event.preventDefault();

    //chatGPT assisted me in aggregating the data for this AJAX request
    const dataObject = {};
    const form = event.target;
    for (let input of form.elements) {
        if (input.name) {
            dataObject[input.name] = input.value;
        }
    }
    axios.post('/snaps/add', dataObject)
    .then((response) => {
        if (response.data && response.data.success) {
            showSuccessMessage('Snapshot added successfully','/snaps/mysnaps');
            setTimeout(() => {
                hideSuccessMessage();
            }, 3000); 
        } else {
            console.error('Snapshot addition was not successful.');
            showErrorMessage('Failed to add snapshot. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error adding snapshot:', error);
        showErrorMessage('An error occurred. Please try again later.');
    });
});
