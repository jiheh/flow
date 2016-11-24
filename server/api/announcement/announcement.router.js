// eslint-disable arrow-body-style

'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const _ = require('lodash');

const HttpError = require('../../utils/HttpError');
const Announcement = require('./announcement.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');
const User = require('../user/user.model');

const Promise = require('bluebird');

// user receives announcements - POST because hash is sent with request
router.post('/list', (req, res, next) => {
  const { hash } = req.body;

  return User.findOne({
    where: { hash },
    include: [{
      model: Channel,
      through: 'User-Channel',
    }],
  })
    .then((user) => {
      const { channels } = user;
      return Promise.all(channels.map(channel => channel.getAnnouncements()));
    })
    .then((announcements) => {
      res.json(_.flatten(announcements));
    })
    .catch(next);
});

// POST - admin creates announcement
router.post('/', (req, res, next) => {
  const { channelIds, title, content } = req.body;

  if (!req.user || !channelIds.length) { throw HttpError(403); } // eslint-disable-line new-cap

  db.transaction((t) => {
    let tempAdmin;
    return Admin.findOne({
      where: {
        user_info_id: req.user.id,
      },
    })
      .then((admin) => {
        if (!admin) { throw HttpError(404); } // eslint-disable-line new-cap
        tempAdmin = admin;

        return Announcement.create({
          title,
          contents,
          admin_id: admin.id,
        });
      })

      .then((announcement) => {
        return Promise.map(channelIds, (id) => {
          let channel;
          return Channel.findById(id)
            .then((foundChannel) => {
              channel = foundChannel;
              return tempAdmin.getChannels();
            })
            .then((channels) => {
              if (!channels) { throw new Error(); }

              if (channels.map(ch => ch.id).includes(channel.id)) {
                return channel.addAnnouncement(announcement);
              } else { throw new Error(); }
            });
        });
      })
      .then(() => res.status(201).send());
  })
    .catch(next);
});

module.exports = router;
