'use strict';

const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser')
const Admin = require('../api/admin/admin.model');
const UserInfo = require('../api/userInfo/userInfo.model');
const passport = require('passport');

app.use(require('./logging.middleware'));
app.use(require('./statics.middleware'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const session = require('express-session');

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
  // cookie: {maxAge: 3600000}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
   Admin.findOne(
    {include: [{
      model: UserInfo, as: 'UserInfo',
      where: {id}
    }]})
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// app.use(function (req, res, next) {
//   console.log('session', req.session);
//   next();
// });

app.use('/api', require('../api/api.router'));

app.use('/auth', require('../auth'));

const validFrontendRoutes = ['/', '/users', '/users/:id', '/signup', '/login', '/:abc'];
const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
validFrontendRoutes.forEach((stateRoute) => {
  app.get(stateRoute, (req, res) => {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));

module.exports = app;
