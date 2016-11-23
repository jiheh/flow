'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/quotes', require('./quote/quote.router'));
router.use('/users', require('./users/user.router'));
router.use('/organization',require('./organization/organization.router'))
router.use('/admin',require('./admin/admin.router'))

module.exports = router;
