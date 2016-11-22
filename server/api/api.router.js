'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/users', require('./users/user.router'));

module.exports = router;
