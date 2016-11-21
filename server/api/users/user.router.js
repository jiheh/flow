'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const HttpError = require('../../utils/HttpError');
const User = require('./user.model');

router.param('id', (req, res, next, id) => {
  User.findById(id)
  .then((user) => {
    // eslint-disable-next-line new-cap
    if (!user) throw HttpError(404);
    req.requestedUser = user;
    next();
  })
  .catch(next);
});

router.get('/', (req, res, next) => {
  User.findAll({})
  .then((users) => {
    res.json(users);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then((user) => {
    res.status(201).json(user);
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  req.requestedUser.reload()
  .then((requestedUser) => {
    res.json(requestedUser);
  })
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  req.requestedUser.update(req.body)
  .then((user) => {
    res.json(user);
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  req.requestedUser.destroy()
  .then(() => {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
