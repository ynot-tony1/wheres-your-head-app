

function createSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.id = 'success-message';
    successMessage.classList.add('alert', 'alert-success');
    successMessage.style.display = 'none'; 
    successMessage.style.position = 'fixed'; 
    successMessage.style.top = '0px'; 
    successMessage.style.left = '50%'; 
    successMessage.style.transform = 'translateX(-50%)'; 
    successMessage.style.zIndex = '9999'; 
    successMessage.style.width = 'auto'; 
    successMessage.style.padding = '10px'; 
    return successMessage;
}

function showSuccessMessage(message, redirectUrl = null, timeout = 1500) {
    let successMessage = document.getElementById('success-message');
    if (!successMessage) {
        successMessage = createSuccessMessage();
        document.body.appendChild(successMessage);
    }
    successMessage.textContent = message;
    successMessage.style.display = 'block';


    if (redirectUrl) {
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, timeout);
    }
}


function hideSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}


export { showSuccessMessage, hideSuccessMessage};
