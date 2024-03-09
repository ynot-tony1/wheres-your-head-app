/**
 * Middleware function to set cache control headers to prevent caching.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function noCache(req, res, next) {
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  }

  module.exports = noCache;