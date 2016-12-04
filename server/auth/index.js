const express = require('express');
const router = express.Router();
const passport = require('passport');


const Admin = require('../api/admin/admin.model')
const UserInfo = require('../api/userInfo/userInfo.model');

module.exports = router;

passport.use(new (require('passport-local').Strategy) ({
  usernameField: 'email',
  passwordField: 'password'
  }, (email, password, done) => {
    Admin.findOne(
    {include: [{
      model: UserInfo, as: 'UserInfo',
      where: {email}
    }]})
    .then(currentAdmin => {
      if (!currentAdmin) return done(null, false);
        return  currentAdmin.UserInfo.authenticate(password)
      .then(ok => {
        if (!ok) return done(null, false);
        done(null, currentAdmin.UserInfo);
      })
    .catch(done);
  });
}));


router.post('/login',
  passport.authenticate('local'),
    function (req, res, next) {
      console.log(req.body)
      res.redirect('/');
    }
);

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

// router.post('/signup', (req, res, next) => {
//   Admin.findOrCreate({
//     where: {
//       email: req.body.email,
//     },
//     defaults: {
//       password: req.body.password,
//     }
//   })
//     .then((user) => {
//       req.session.userId = user.id;
//       res.sendStatus(204);
//     });
// });

router.get('/me', (req, res, next) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});
