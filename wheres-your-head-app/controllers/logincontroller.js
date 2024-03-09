const axios = require("axios");
const bcrypt = require("bcryptjs");
const {
  generateJWT,
  setJWTCookie,
  clearJWTCookie,
} = require("../config/jwtconfig");
exports.renderLogin = (req, res, next) => {
  try {
    const returnUrl = req.query.returnUrl || "/home";
    res.render("login", { returnUrl });
  } catch (error) {
    next(error);
  }
};



/**
 * handles user login by verifying their credentials
 *
 * @param {string} req.body.username - username submitted by the user
 * @param {string} req.body.password - password submitted by the user
 * @param {Object} res - The HTTP response object.
 * @returns {Promise} - A promise that resolves when the login process is complete.
 */
exports.handleLogin = (req, res, next) => { 
  const apiUrl = "http://localhost:3002/auth/login";
  const { username, password } = req.body;
  let errors = []; 


  axios.post(apiUrl, { username }, { validateStatus: (status) => status < 500 })
    .then((response) => {
      if (response.status === 200 && response.data.data) {
        const user = response.data.data;
        return bcrypt.compare(password, user.pass_word)
          .then((isMatch) => {
            if (isMatch) {
              const token = generateJWT(user);
              setJWTCookie(res, token);
              return res.redirect(req.body.returnUrl || "/home");
              
            } else {
              errors.push({ msg: "Invalid username or password." });
              return res.render("login", {
                errors,
                username,
                password: '',
                returnUrl: req.body.returnUrl || "/auth/login",
              });
            }
          });
      } else {
        errors.push({ msg: "Invalid username or password" });
        return res.render("login", {
          errors,
          username,
          password: '',
          returnUrl: req.body.returnUrl || "/auth/login",
        });
      }
    })
    .catch((error) => {
      next(error); 
    });
};


 exports.handleLogout = (req, res, next) => {
  try {
    clearJWTCookie(res);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
