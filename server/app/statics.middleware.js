'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', '..');
const publicPath = path.join(rootPath, 'public');

router.use(express.static(publicPath));
router.use(express.static(path.join(__dirname, '..', '..', 'node_modules')));

module.exports = router;
