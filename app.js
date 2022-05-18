var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');

require('dotenv').config();


var app = express();//clase express, este es el servidor

// configuracion de vista
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
//configuracion de express-handlebars

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views')+ '/layouts'),
    partialsDir: path.join(app.get('views')+ '/partials'),
}));


//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//para entender datos que vienen de un formulario

app.use(express.static(path.join(__dirname, 'public')));//para acceder archivos publicos para el navegador
//app.use(express.static(path.join(__dirname, 'controllers')));
app.use(cookieParser());
app.use('/', indexRouter);

module.exports = app;