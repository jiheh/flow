'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/users', require('./users/user.router'));

module.exports = router;
