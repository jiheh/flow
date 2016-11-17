'use strict'; 

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model');
var passport = require('passport');

app.use(require('./logging.middleware'));
app.use(require('./request-state.middleware'));
app.use(require('./statics.middleware'));

var session = require('express-session');

app.use(session({
  secret: 'supersecret'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
      .then(function (user) {
        done(null, user);
      })
      .catch(done);
});

// app.use('/api', function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0;
//   console.log('counter', ++req.session.counter);
//   next();
// });

// app.use(function (req, res, next) {
//   console.log('session', req.session);
//   next();
// });

app.use('/api', require('../api/api.router'));

app.use('/auth', require('../auth'));

var validFrontendRoutes = ['/', '/users', '/users/:id', '/signup', '/login', '/:abc'];
var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));

module.exports = app;
