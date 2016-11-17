'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');

var rootPath = path.join(__dirname, '..', '..');
var publicPath = path.join(rootPath, 'public');

router.use(express.static(publicPath));

module.exports = router;
