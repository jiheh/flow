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

// POST - CHROME - user receives invites
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
  let userInfoEmail;
  UserInfo.findOne({
    where: {
      email: invite.email
    }
  })
    .then((userInfo) => {
      userInfoEmail = userInfo.email;
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
    .then((number) => {
      return Invite.findAll({
        where: {
          email: userInfoEmail
        }
      })
    })
    .then((invites) => {
      res.send(invites);
    })
    .catch(next);
})

// POST - admin creates announcement
router.post('/webapp', (req, res, next) => {
  Invite.create(req.body)
    .then((invite) => {
      res.status(201).send()
    })
    .catch(next);
});

router.post('/addAdmin', (req, res, next) => {
  const { email, channelId } = req.body;
  let channel,
      userInfo;
  console.log("hit the route")
  Channel.findById(channelId)
    .then((currentChannel) => {
      console.log("found channel")
      channel = currentChannel;
      return UserInfo.findOne({
        where: {
          email: email
        }
      });
    })
    .then((currentUserInfo) => {
      console.log("found userinfo")
      console.log(currentUserInfo)
      userInfo = currentUserInfo;
      return Admin.create();
    })
    .then((admin) => {
      console.log("found admin")
      console.log(admin)
      return admin.setUserInfo(userInfo);
    })
    .then((admin) => {
      console.log("about to add to channel")
      console.log(admin)
      channel.addAdmin(admin);
    })
    .catch(next);
});

module.exports = router;
