/* eslint-disable arrow-body-style */

'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const User = require('./user.model');
const UserInfo = require('../userInfo/userInfo.model');
const Channel = require('../channel/channel.model');

router.post('/', (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  db.transaction((t) => {
    return UserInfo.find({
      where: {
        email: req.body.email,
        name: req.body.name,
      },
    })
      .then((foundUserInfo) => {
        let userInfo;
        if (!foundUserInfo) {
          // UserInfo not found, try create
          return UserInfo.create(req.body)
            .then((createdUserInfo) => {
              userInfo = createdUserInfo;
              return User.create();
            })
            .then((user) => {
              return user.setUserInfo(userInfo);
            })
            .then((user) => {
              res.json(user.hash);
            });
        } else { // eslint-disable-line no-else-return
          // UserInfo found, check password, find User and return hash
          userInfo = foundUserInfo;
          return userInfo.authenticate(req.body.password)
            .then((passwordMatch) => {
              if (!passwordMatch) { throw new Error('Password doesn\'t match.'); }
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
              if (!user) { throw new Error('User not found.'); }
              res.json(user.hash);
            });
        }
      });
  })
    .catch(next);
});

module.exports = router;
