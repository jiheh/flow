'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/images', require('./image/image.router'));
router.use('/videos', require('./video/video.router'));
router.use('/quotes', require('./quote/quote.router'));
router.use('/users', require('./users/user.router'));

// router.use('/response', require('./response/response.router'));
// router.use('/survey', require('./survey/survey.router'));
// router.use('/channel', require('./channel/channel.router'));
// router.use('/question', require('./question/question.router'));


module.exports = router;