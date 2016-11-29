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
  console.log("HASH CHANNELS")
  console.log(hash)
  User.findOne({
    where: { hash },
  })
    .then((user) => {
      console.log("CHANNEL HABIBI USER");
      console.log(user)
      return user.getChannels();
    })
    .then((channels) => {
      console.log("HARAMBE HABIBI INSIDE CHANNELS");
      console.log(channels);
      let channelNames = Object.keys(channels).map(channelKey => channels[channelKey].name);
      console.log(channelNames);
      res.send(channelNames)
    })
    .catch(next);
});

module.exports = router;
