'use strict';

const router = require('express').Router();

router.use((req, res, next) => {
  let bodyString = '';
  req.on('data', (chunk) => {
    bodyString += chunk;
  });
  req.on('end', () => {
    bodyString = bodyString || '{}';
    req.body = eval('(' + bodyString + ')');
    next();
  });
});

module.exports = router;
