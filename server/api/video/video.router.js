'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const videoDir = path.join(__dirname, '..', '..', '..', 'public', 'backgroundVideos');
  // const now = new Date();
  // const epochDays = Math.floor(now / 8.64e7);

  fs.readdir(videoDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      // const videoToSend = files[epochDays % numFiles];
      const videoToSend = files[Math.floor(Math.random() * numFiles)];
      const videoPath = path.join(videoDir, videoToSend);
      res.redirect(`/backgroundVideos/${videoToSend}`);
    }
  });
});

module.exports = router;
