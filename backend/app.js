const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const config = require('./config.js');



const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');
const contactRouter = require('./routers/contactRouter');
const bmiRouter = require('./routers/bmiRouter');



const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server!'), err => console.log(err));

const app = express();

app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  } else {
    console.log(`Redirecting to https://${req.hostname}:${port}${req.url}`);
    res.redirect(301, `https://${req.hostname}:${port}${req.url}`);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use(passport.initialize());  //check to see if there is an existing session for the client
// app.use(passport.session());  if so, session data will be loaded into the req as "req.user"


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'public')));



app.use('/contact', contactRouter);
app.use('/bmi', bmiRouter);





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
