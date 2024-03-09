 /**
     * Validates the form data received from the server-side.
     *
     * @param {Object} req - The request object containing the form data.
     * @param {string} req.body.username - The username entered in the form.
     * @param {string} req.body.email - The email entered in the form.
     * @param {string} req.body.password - The password entered in the form.
     * @param {string} req.body.confirm_password - The confirm password entered in the form.
     */
exports.validateRegisterForm = (req, res, next) => {
   
    const { username, email, password, confirm_password } = req.body;
    let errors = [];
  
    if (!username || username.length < 3 ) {
        errors.push({ msg: 'Username must be at least 3 characters long.' });
    }
    if (!password || password.length < 3) {
        errors.push({ msg: 'Password must be at least 3 characters long.' });
    }
       if (password !== confirm_password) {
        errors.push({ msg: 'Passwords do not match.' });
    }
    if (errors.length > 0) {
      res.render('register', {
        errors,
        username,
        email,
        password: '', 
        confirm_password: '', 
      });
    } else {
      next();
    }
};







  /**
     * Validates the username and password from the request body.
     *
     * @param {Object} req - The request object.
     * @param {string} req.body.username - The username to be validated.
     * @param {string} req.body.password - The password to be validated.
     */
exports.validateLoginForm = (req, res, next) => {
  
    const { username, password } = req.body;
    const errors = [];
    if (!username) {
        errors.push({ msg: 'Username field cannot be empty.' });
    }
    if (!password) {
        errors.push({ msg: 'Password field cannot be empty.' });
    }
    if (username.length<3 || password.length<3){
        errors.push({ msg: 'Username and password must be more than 3 characters long.' });
    }
    if (errors.length > 0) {
        res.render('login', {
            errors,
            username,
            password,
        });
    } else {
        next();
    }
};





    /**
     * Validates the contextual triggers received in the request body.
     * @param {Object} req - The request object.
     * @param {Object} req.body - The request body.
     * @param {Array} req.body.contextual_triggers - The contextual triggers to be validated.
     */
exports.validateSnapshotForm = (req, res, next) => {
    const errors = [];
    const { contextual_triggers } = req.body;
    if (contextual_triggers && contextual_triggers.length > 500) {
        errors.push({ msg: 'Contextual Triggers must be less than 500 characters.' });
    }
    if (errors.length > 0) {
        res.render('addsnapshot', {
            errors,
            contextual_triggers,
            ...req.body
        });
    } else {
        next();
    }
};
