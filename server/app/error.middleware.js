'use strict';

const router = require('express').Router();

const HttpError = require('../utils/HttpError');

router.use(HttpError(404).middleware());

router.use((err, req, res, next) => {
  err.status = err.status || 500;
  console.error(err.stack);
  const html = [
    '<html><body>',
    '<p>ERROR: ', err.status, ' - ', err.message, '</p>',
    '<p>VERB: ', req.method, '</p>',
    '<p>URL: ', req.originalUrl, '</p>',
    '<p>QUERY ', JSON.stringify(req.query), '</p>',
    '<p>BODY: ', JSON.stringify(req.body), '</p>',
    '<pre>', err.stack, '</pre>',
    '</body></html>',
  ].join('');
  res.status(err.status).send(html);
});

module.exports = router;
