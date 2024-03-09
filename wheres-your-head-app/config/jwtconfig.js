// import json web token library
const jwt = require("jsonwebtoken");

// get the JWT secret key from the .env environment variables
const jwtKey = process.env.JWT_SECRET;

/**
 *  takes a user object and generates a JSON Web Token with it and the secret key
 *
 * @param {Object} user - user object the token is made for
 * @param {string} user.user_id - user's unique id
 * @param {string} user.user_name - username of the user
 * 
 * @returns {string} The generated JWT as a string.
 */
const generateJWT = (user) => {
  // sign a new token with the user's details and set it to expire in 5 minutes
  return jwt.sign({ id: user.user_id, username: user.user_name }, jwtKey, {
    expiresIn: "5m",
  });
};

//sets a JWT token in a cookie in the response
const setJWTCookie = (res, token) => {

  // set cookie with JWT, marked as HTTP-only and secure in the res to the client
  res.cookie("jwt", token, { httpOnly: true, secure: true });
};

/**
 * piece of middleware that verifies that a token is present in the cookies inside the request
 *
 * @param {Object} req - request object from the client
 * @param {Object} res - response object to the client
 * @param {Function} next - a callback to pass control to the next piece of middleware in the chain
 *
 * @param {Object} req.cookies - the cookies in the request object
 * @param {string} req.cookies.jwt - the JWT token stored in the cookies
 */






const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  const returnUrl = encodeURIComponent(req.originalUrl);
  if (!token) {
    return res.redirect(`/auth/login?returnUrl=${returnUrl}`);
  }
  jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      return res.redirect(`/auth/login?returnUrl=${returnUrl}`);
    }
res.locals.user = decoded;
    next();
  });
};






const clearJWTCookie = (res) => {
  res.clearCookie("jwt");
};

module.exports = { generateJWT, verifyToken, setJWTCookie, clearJWTCookie };