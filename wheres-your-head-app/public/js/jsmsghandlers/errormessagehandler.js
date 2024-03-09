

function createErrorMessage() {
    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.classList.add('alert', 'alert-danger');
    errorMessage.style.display = 'none'; 
    errorMessage.style.position = 'fixed'; 
    errorMessage.style.top = '0px'; 
    errorMessage.style.left = '50%';
    errorMessage.style.transform = 'translateX(-50%)';
    errorMessage.style.zIndex = '9999'; 
    errorMessage.style.width = 'auto'; 
    errorMessage.style.padding = '10px';
    return errorMessage;
}

function showErrorMessage(message) {
    let errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = createErrorMessage();
        document.body.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

export { showErrorMessage, hideErrorMessage };
