'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/quotes', require('./quote/quote.router'));
router.use('/users', require('./user/user.router'));
router.use('/announcements', require('./announcement/announcement.router'));

module.exports = router;
