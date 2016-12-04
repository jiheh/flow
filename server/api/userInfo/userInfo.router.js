'use strict';

const router = require('express').Router();

const db = require('../../_db');

const User = require('./user.model');
const UserInfo = require('../userInfo/userInfo.model');


router.get('/:userId', (req, res) => {

  const userId = req.params.userId;

  if(!req.user) throw new Error('Only Admins have access to this users.')

  User.findById(userId)
    .then(foundUser => {

      // did not find user
      if (!foundUser) {}


    })


})

module.exports = router;
