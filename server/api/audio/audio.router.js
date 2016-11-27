'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const audioDir = path.join(__dirname, '..', '..', '..', 'public', 'backgroundSongs');
  fs.readdir(audioDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const songToSend = files[Math.floor(Math.random() * numFiles)];
      const songPath = path.join(audioDir, songToSend);
      res.sendFile(songPath);
    }
  });
});

module.exports = router;
