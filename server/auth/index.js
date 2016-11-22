const express = require('express');
const router = express.Router();
const userInfo = require('../api/userInfo/userInfo.model');

module.exports = router;

router.post('/login', (req, res, next) => {
  let admin;
  userInfo.findOne({
    where: {
      email: req.body.email,
    }
  })
  .then(currentAdmin => {
    if (!currentAdmin) {
      res.sendStatus(401);
    }
    admin = currentAdmin;
    return currentAdmin.authenticate(req.body.password);
  })
  .then(passwordMatches => {
    if (passwordMatches) {
      req.session.userId = admin.id;
      res.sendStatus(204);
    } else {
      res.sendStatus(401);
    }
  })
  .catch(next);
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.sendStatus(204);
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

router.use('/google', require('./google'));
