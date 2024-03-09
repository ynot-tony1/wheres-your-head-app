const express = require('express');
const morgan = require('morgan');
const apisnapshotroutes = require('./routes/apisnapshotroutes');
const apiloginroutes = require('./routes/apiloginroutes');
const apiregroutes = require('./routes/apiregistrationroutes');
const apidashboardroutes = require('./routes/apidashboardroutes');
const apistatsroutes = require('./routes/apistatsroutes');

const app = express();

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/snaps', apisnapshotroutes);
app.use('/auth', apiloginroutes);
app.use('/reg', apiregroutes);
app.use('/home', apidashboardroutes);
app.use('/stats', apistatsroutes);

module.exports = app;