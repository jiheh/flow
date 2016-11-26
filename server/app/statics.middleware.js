'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', '..');
const bundlePath = path.join(rootPath, 'public', 'bundle.js');
const bundleMapPath = path.join(rootPath, 'public', 'bundle.js.map');
const bundleMinPath = path.join(rootPath, 'public', 'bundle.min.js');
const bundleMapMinPath = path.join(rootPath, 'public', 'bundle.min.js.map');
const imagesPath = path.join(rootPath, 'public', 'backgroundImages');
const videosPath = path.join(rootPath, 'public', 'backgroundVideos');
const filesPath = path.join(rootPath, 'public', 'files');
const quotesPath = path.join(rootPath, 'public', 'quotes');
const faviconPath = path.join(rootPath, 'public', 'favicon.ico');
const logoPath = path.join(rootPath, 'public', 'logo.png');

const cacheTime = '1d';
router.use('/backgroundVideos', express.static(videosPath, { maxAge: cacheTime }));
router.use('/backgroundImages', express.static(imagesPath));
router.use('/files', express.static(filesPath));
router.use('/quotes', express.static(quotesPath));
router.use('/quotes', express.static(quotesPath));

router.use('/bundle.js', express.static(bundlePath));
router.use('/bundle.min.js', express.static(bundleMinPath));
router.use('/bundle.js.map', express.static(bundleMapPath));
router.use('/bundle.min.js.map', express.static(bundleMapMinPath));
router.use('/favicon.ico', express.static(faviconPath));
router.use('/logo.png', express.static(logoPath));

module.exports = router;
