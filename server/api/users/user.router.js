'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const HttpError = require('../../utils/HttpError');
const User = require('./user.model');
const UserInfo = require('../userInfo/userInfo.model');

router.param('id', (req, res, next, id) => {
  User.findById(id)
  .then((user) => {
    // eslint-disable-next-line new-cap
    if (!user) throw HttpError(404);
    req.requestedUser = user;
    next();
  })
  .catch(next);
});

router.get('/', (req, res, next) => {
  User.findAll({})
  .then((users) => {
    res.json(users);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  db.transaction((t) => {
    return UserInfo.find({
      where: {
        email: req.body.email,
      },
    })
      .then((userInfo) => {
        if (!userInfo) {
          // UserInfo not found, try create
          let newUserInfo;
          return UserInfo.create(req.body)
            .then((createdUserInfo) => {
              // eslint-disable-next-line new-cap
              if (!createdUserInfo) throw HttpError(404);
              newUserInfo = createdUserInfo;
              return User.create();
            })
            .then((user) => {
              // eslint-disable-next-line new-cap
              if (!user) throw HttpError(404);
              return user.update({
                user_info_id: newUserInfo.id,
              });
            })
            .then((user) => {
              // eslint-disable-next-line new-cap
              if (!user) throw HttpError(404);
              res.json(user.hash);
            });
        } else {
          // UserInfo found, check password, find User and return hash
          let newUserInfo;
          return userInfo.authenticate(req.body.password)
            .then(passwordMatch => {
              // eslint-disable-next-line new-cap
              if (!passwordMatch) throw HttpError(404);
              return User.findOne({
                include: [{
                  model: UserInfo,
                  as: 'UserInfo',
                  where: {
                    id: userInfo.id,
                  },
                }]
              })
                .then(user => {
                  // eslint-disable-next-line new-cap
                  if (!user) throw HttpError(404);
                  res.json(user.hash);
                });
            })
        }
      })
      .catch(next);
  });
});

router.get('/:id', (req, res, next) => {
  req.requestedUser.reload()
  .then((requestedUser) => {
    res.json(requestedUser);
  })
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  req.requestedUser.update(req.body)
  .then((user) => {
    res.json(user);
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  req.requestedUser.destroy()
  .then(() => {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
