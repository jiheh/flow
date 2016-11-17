'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

module.exports = router;
