require('colors');
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// connecting to db
mongoose.connect('mongodb+srv://iden:iden123@cluster0-ui166.mongodb.net/test?retryWrites=true&w=majority')
    .then( db => console.log('db connected'.blue))
    .catch( err => console.log(err));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // para recibir datos

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// importing routes
app.use(require('./routes/index'));

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.blue);
});
