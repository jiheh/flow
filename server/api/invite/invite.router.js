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
      return Invite.findAll({
        where: {
          email: userInfo.email
        }
      })
    })
    .then((invites) => {
      res.send(invites);
    })
    .catch(next);
});

router.post('/chrome/delete', (req, res, next) => {
  const { invite } = req.body;
  let user;
  UserInfo.findOne({
    where: {
      email: invite.email
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
          id: invite.channelId
        }
      })
    })
    .then((channel) => {
      return channel.addUser(user);
    })
    .then((channel) => {
      return Invite.destroy({
        where: {
          email: invite.email,
          channelId: invite.channelId
        }
      })
    })
    .catch(next)


})

// POST - admin creates announcement
router.post('/webapp', (req, res, next) => {
  Invite.create(req.body)
    .then((invite) => {
      res.status(201).send()
    })
    .catch(next);
});

module.exports = router;
