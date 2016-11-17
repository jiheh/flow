let express = require('express');
let router = express.Router();
let User = require('../api/users/user.model');
module.exports = router;

router.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
    }
  })
  .catch(next);
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.sendStatus(204);
});

router.post('/signup', function (req, res, next) {

  User.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      password: req.body.password
    }
  })
  .then(function (user) {
    req.session.userId = user.id;
    res.sendStatus(204);
  });

});

router.get('/me', function (req, res, next) {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});

router.use('/google', require('./google'));