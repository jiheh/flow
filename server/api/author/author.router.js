'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/:number', (req, res, next) => {
  const authorDir = path.join(__dirname, '..', '..', '..', 'public', 'authors');
  fs.readdir(authorDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const authorToSend = files[req.params.number];
      res.sendFile(authorDir + '/' + authorToSend);
    }
  });
});

module.exports = router;
