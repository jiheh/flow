/* eslint-disable arrow-body-style */

'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const _ = require('lodash');

const HttpError = require('../../utils/HttpError');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');
const User = require('../user/user.model');
const UserInfo = require('../userInfo/userInfo.model');
const Invite = require('../invite/invite.model');

const Promise = require('bluebird');

// POST - CHROME - user receives announcements
router.post('/chrome', (req, res, next) => {
  const { hash } = req.body;
  User.findOne({
    where: { hash },
  })
    .then((user) => {
      return UserInfo.findOne({
        where: {
          id: user.user_info_id
        }
      })
    })
    .then((userInfo) => {
      return Invite.findOne({
        where: {
          email: userInfo.email
        }
      })
    })
    .then((invite) => {
      console.log("GOTTEEEEEM");
      console.log(invite);
      res.send(invite);
    })
    .catch(next);
  // return User.findOne({
  //   where: { hash },
  //   include: [{
  //     model: Channel,
  //     through: 'User-ChannelItem',
  //   }],
  // })
  //   .then((user) => {
  //     if (!user) { throw new Error('User not found.'); }
  //
  //     const { channels } = user;
  //     return Promise.all(channels.map(channel => channel.getAnnouncements()));
  //   })
  //   .then((announcements) => {
  //     res.json(_.flatten(announcements));
  //   })
  //   .catch(next);
});

// POST - admin creates announcement
router.post('/webapp', (req, res, next) => {
  Invite.create(req.body)
    .then(() => res.status(201).send())
    .catch(next);
});

module.exports = router;
