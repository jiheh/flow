const router = require('express').Router(); // eslint-disable-line new-cap
const Admin = require('../admin/admin.model');
const Channel = require('./channel.model');
const User = require('../user/user.model');

// Get all Channels for a specific admin

router.get('/allChannels/', (req, res, next) => {
  if (!req.user) res.status(403).send();
  else {
    Channel.findAll({
      include:[{ all: true }],
    })
      .then((channels) => {
        res.send(channels.filter((channel) => {
          return channel.admins.filter(admin => admin.id === req.user.id).length > 0;
        }));
      })
      .catch(next);
  }
});


router.post('/', (req, res, next) => {
  if (!req.user) res.status(403).send();
  else {
    let admin;
    let channelId;
    Admin.findById(req.user.id)
      .then((foundAdmin) => {
        admin = foundAdmin;
        return Channel.create(req.body)
      })
      .then((createdChannel) => {
        channelId = createdChannel.id;
        return createdChannel.addAdmin(admin);
      })
      .then((createdChannel) => {
        return Channel.findOne({
          where: { id: channelId },
          include: [{ all: true }],
        });
      })
      .then((foundChannel) => res.send(foundChannel))
      .catch(next);
  }
})

router.post('/chrome/allChannels', (req, res, next) => {
  const { hash } = req.body;

  User.findOne({
    where: { hash },
  })
    .then((user) => {
      return user.getChannels();
    })
    .then((channels) => {
      let channelNames = Object.keys(channels).map(channelKey => [channels[channelKey].name, channels[channelKey].id]);
      res.send(channelNames)
    })
    .catch(next);
});

router.post('/chrome/removeUser', (req, res, next) => {
  const { channelId, hash } = req.body;
  let ourChannel;
  let ourUser;
  Channel.findOne({
    where: {
      id: channelId
    }
  })
    .then((channel) => {
      ourChannel = channel;
      return User.findOne({
        where: { hash },
      })
    })
    .then((user) => {
      ourUser = user;
      return ourChannel.removeUser(user)
    })
    .then (() => {
      return ourUser.getChannels();
    })
    .then((channels) => {
      let channelNames = Object.keys(channels).map(channelKey => [channels[channelKey].name, channels[channelKey].id]);
      res.send(channelNames)
    })
    .catch(next);
})

module.exports = router;
