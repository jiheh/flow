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

router.post('/chrome/allChannels', (req, res, next) => {
  const { hash } = req.body;

  User.findOne({
    where: { hash },
  })
    .then((user) => {
      return user.getChannels();
    })
    .then((channels) => {
      let channelNames = Object.keys(channels).map(channelKey => channels[channelKey].name);
      res.send(channelNames)
    })
    .catch(next);
});

module.exports = router;
