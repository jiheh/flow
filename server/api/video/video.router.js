'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const videoDir = path.join(__dirname, '..', '..', '..', 'public', 'backgroundVideos');
  fs.readdir(videoDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const randomFileIdx = Math.floor(Math.random() * numFiles);
      res.json(files[randomFileIdx]);
    }
  });
});

module.exports = router;
