'use strict'; 

let router = require('express').Router();

router.use(function (req, res, next) {
  let bodyString = '';
  req.on('data', function (chunk) {
    bodyString += chunk;
  });
  req.on('end', function () {
    bodyString = bodyString || '{}';
    req.body = eval('(' + bodyString + ')');
    next();
  });
});

module.exports = router;
