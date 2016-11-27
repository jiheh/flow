'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/songs', require('./audio/audio.router'));
router.use('/quotes', require('./quote/quote.router'));
router.use('/users', require('./user/user.router'));
router.use('/announcements', require('./announcement/announcement.router'));

router.use('/organization', require('./organization/organization.router'));
router.use('/admin', require('./admin/admin.router'));
router.use('/survey', require('./survey/survey.router'));

// router.use('/response', require('./response/response.router'));
// router.use('/channels', require('./channels/channels.router'));
// router.use('/question', require('./question/question.router'));


module.exports = router;
