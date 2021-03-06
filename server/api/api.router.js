'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/songs', require('./audio/audio.router'));
router.use('/quotes', require('./quote/quote.router'));
router.use('/authors', require('./author/author.router'));
router.use('/users', require('./user/user.router'));
router.use('/announcements', require('./announcement/announcement.router'));
router.use('/invites', require('./invite/invite.router'));
router.use('/organization', require('./organization/organization.router'));
router.use('/admin', require('./admin/admin.router'));
router.use('/survey', require('./survey/survey.router'));
router.use('/responses', require('./response/response.router'));
router.use('/channel', require('./channel/channel.router'));

// router.use('/question', require('./question/question.router'));


module.exports = router;
