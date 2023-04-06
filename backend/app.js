const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contactRouter');

// connecting to mongodb
const mongoose = require('mongoose');
const uri = 'mongodb+srv://peterhyh:KXMoyvSpMSdtAKvI@peterhyhcluster.n1g4sb0.mongodb.net/?retryWrites=true&w=majority';
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error);
  }
}

connect();

const app = express();

//Redirecting all unsecure ports to secure port:
app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  } else {
    console.log(`Redirecting to https://${req.hostname}:${app.get('secPort')}${req.url}`);
    res.redirect(301, `Redirecting to https://${req.hostname}:${app.get('secPort')}${req.url}`);
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Authentication middleware above the static files because user must authenticate before accessing data from the server
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
