require('dotenv').config({ path: './config.env' });

const express = require("express");
const app = express();


const indexroutes = require('./routes/indexroutes');
const snapshotroutes = require('./routes/snapshotroutes');
const loginroutes = require('./routes/loginroutes');
const regroutes = require('./routes/regroutes');
const dashboardroutes = require('./routes/dashboardroutes');
const statsroutes = require('./routes/statsroutes');

const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use('/', indexroutes);
app.use('/snaps', snapshotroutes);
app.use('/auth', loginroutes);
app.use('/reg', regroutes);
app.use('/home', dashboardroutes);
app.use('/stats', statsroutes);



module.exports = app;
