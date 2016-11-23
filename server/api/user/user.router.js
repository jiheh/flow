'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const HttpError = require('../../utils/HttpError');
const User = require('./user.model');
const UserInfo = require('../userInfo/userInfo.model');

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
          return userInfo.authenticate(req.body.password)
            .then((passwordMatch) => {
              // eslint-disable-next-line new-cap
              if (!passwordMatch) throw new Error();
              return User.findOne({
                include: [{
                  model: UserInfo,
                  as: 'UserInfo',
                  where: {
                    id: userInfo.id,
                  },
                }],
              });
            })
            .then((user) => {
              // eslint-disable-next-line new-cap
              if (!user) throw new Error();
              res.json(user.hash);
            });
        }
      })
  })
    .catch(next);
});

module.exports = router;
