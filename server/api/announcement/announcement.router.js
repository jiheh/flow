/* eslint-disable arrow-body-style */

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

// POST - CHROME - user receives announcements
router.post('/chrome', (req, res, next) => {
  const { hash } = req.body;

  return User.findOne({
    where: { hash },
    include: [{
      model: Channel,
      through: 'User-ChannelItem',
    }],
  })
    .then((user) => {
      if (!user) { throw new Error('User not found.'); }

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
    return Admin.findByUserInfoId(req.user.id)
      .then((admin) => {
        if (!admin) { throw new Error('Admin not found.'); }
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
              if (!channels) { throw new Error('Admin does not have any channels.'); }

              if (channels.map(ch => ch.id).includes(channel.id)) {
                return channel.addAnnouncement(announcement);
              } else { throw new Error('Admin does not have access to channels.'); }
            });
        });
      })
      .then(() => res.status(201).send());
  })
    .catch(next);
});

// GET - fetch all announcement in one channel
router.get('/allAnnouncements/:channelId', (req, res, next) => { 
  console.log('**********************',req.params.channelId)
  if(!req.user) throw new Error('Only admins can access announcements. Please log in.')
  Admin.findById(1)
  .then(admin => {
    return admin.getChannels()
  })
  .then(channels => {
    return channels.filter(channel =>{
      console.log(channel.id,parseInt(req.params.channelId),channel['Admin-ChannelItem'].admin_id,req.user.id)
      // return channel['Admin-ChannelItem'].admin_id === parseInt(req.params.channelId) && channel['Admin-ChannelItem'].admin_id === req.user.id
      return channel.id === parseInt(req.params.channelId) && channel['Admin-ChannelItem'].admin_id === req.user.id
  }).length > 0
  })
  .then(val => {
    console.log("IN !!!",val)
    if(!val) return false
    else{
      return (
         Announcement.findAll({
          include:[{
            model:Channel
          }],
          where:{
            channel_id:req.params.channelId
          }
        })
      )
    }
  })
  .then(announcements => {
    announcements ? res.send(announcements) : res.send([])
  })
  .catch(next)
  // Announcement.findAll({
  //   include:[{
  //     model:Channel
  //   }],
  //   where:{
  //     channel_id:req.params.channelId
  //   }
  // })
  // .then(announcements => {

  // })
  // .then(res.send(announcements))
})

module.exports = router;
