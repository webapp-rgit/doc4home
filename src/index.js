const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

//SETTING
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//GLOBAL ROUTES
app.use(require('./routes/index'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Sever on ${app.get('port')}`);
});