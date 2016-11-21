'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();
const morgan = require('morgan');

router.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

module.exports = router;
