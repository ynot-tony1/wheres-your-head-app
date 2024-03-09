/**
 * Renders an error page with the specified error code, message, and return URL.
 *
 * @param {Object} res - The response object.
 * @param {number} errorCode - The error code to be used for rendering the error page.
 * @param {string} message - The error message to be displayed on the error page.
 * @param {string} [returnUrl='/'] - The return URL to be included in the error page.
 */
function renderErrorPage(res, errorCode, message, returnUrl = '/') {

    //chatGPT helped with this logic for mapping error codes to error views
    const errorViewMap = {
        400: "errorviews/400",
        401: "errorviews/401",
        403: "errorviews/403",
        404: "errorviews/404",
        500: "errorviews/500",
        501: "errorviews/503",
    };

    const view = errorViewMap[errorCode] || errorViewMap[500]; 

    res.status(errorCode).render(view, {
        message,
        returnUrl,
    });
}

/**
 * Handles errors and renders appropriate error pages based on the error status.
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function handleErrors(err, req, res, next) {
    console.error(err);
    if (res.headersSent) {
        return next(err);
    }
    if (err.response && err.response.status === 404) {
        renderErrorPage(res, 404, "No snapshots found for this user. Please try adding some data and check back later!", '/');
    } else if (err.status === 503) {
        renderErrorPage(res, 503, "Sorry, the snapshot stats service is currently unavailable. Please try again later!", '/');
    } else {
        console.error("An error occurred: ", err);
        renderErrorPage(res, 500, "Sorry, we're experiencing technical difficulties. Please try again later!", '/');
    }
}



module.exports = { renderErrorPage, handleErrors };
