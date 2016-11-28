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
router.post('/chrome/get', (req, res, next) => {
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
      console.log("IN USER INFO")
      console.log(userInfo)
      return Invite.findAll({
        where: {
          email: userInfo.email
        }
      })
    })
    .then((invites) => {
      console.log("GOTTEEEEEM");
      // console.log(invite);
      console.log(invites)
      res.send(invites);
    })
    .catch(next);
});

router.post('/chrome/delete', (req, res, next) => {
  const { invites } = req.body;
  console.log("IN THE DELETE");
  console.log(invites);
  let user;
  UserInfo.findOne({
    where: {
      email: invites.email
    }
  })
    .then((userInfo) => {
      return User.findOne({
        where: {
          user_info_id: userInfo.id
        }
      })
    })
    .then((foundUser) => {
      if (!foundUser) throw new Error('User not found.');
      user = foundUser;
      return Channel.findOne({
        where: {
          id: invites.channelId
        }
      })
    })
    .then((channel) => {
      return channel.addUser(user);
    })
    .then((channel) => {
      return Invite.destroy({
        where: {
          email: invites.email,
          channelId: invites.channelId
        }
      })
    })
    .catch(next)


})

// POST - admin creates announcement
router.post('/webapp', (req, res, next) => {
  Invite.create(req.body)
    .then((invite) => {
      console.log("CREATING INVITE")
      console.log(invite);
      res.status(201).send()
    })
    .catch(next);
});

module.exports = router;
