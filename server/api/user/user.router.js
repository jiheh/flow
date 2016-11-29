/* eslint-disable arrow-body-style */

'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');

const User = require('./user.model');
const UserInfo = require('../userInfo/userInfo.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model')

router.post('/', (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  db.transaction((t) => {
    return UserInfo.find({
      where: {
        email: req.body.email,
        name: req.body.name,
      },
    })
      .then((foundUserInfo) => {
        let userInfo;
        if (!foundUserInfo) {
          // UserInfo not found, try create
          return UserInfo.create(req.body)
            .then((createdUserInfo) => {
              userInfo = createdUserInfo;
              return User.create();
            })
            .then((user) => {
              return user.setUserInfo(userInfo);
            })
            .then((user) => {
              res.json(user.hash);
            });
        } else { // eslint-disable-line no-else-return
          // UserInfo found, check password, find User and return hash
          userInfo = foundUserInfo;
          return userInfo.authenticate(req.body.password)
            .then((passwordMatch) => {
              if (!passwordMatch) { throw new Error('Password doesn\'t match.'); }
              return User.findOne({
                include: [{
                  model: UserInfo,
                  as: 'UserInfo',
                  where: {
                    id: userInfo.id,
                  },
                }],
              });
            })
            .then((user) => {
              if (!user) { throw new Error('User not found.'); }
              res.json(user.hash);
            });
        }
      });
  })
    .catch(next);
});
 
router.get('/allUsers/:channelId',(req,res) =>{
  if(!req.user) throw new Error('Only Admins have access to this users.')
  User.findAll({
  include:[{model: UserInfo, as: 'UserInfo'},{model: Channel,include:[{model:Admin,through:'Admin-ChannelItem'}]}]})
  .then(users =>{
    return users.filter(user =>{
      return user.channels.filter(channel =>{
        let channelIdCheck = channel.id === parseInt(req.params.channelId) 
        let adminIdCheck = channel.admins.filter(admin =>{
          return admin.id === req.user.id
        }).length > 0
        return channelIdCheck && adminIdCheck 
      }).length > 0
    })
  })
  .then(users =>{
    res.send(users)
  })
  .catch(err => console.error('Cant get all users',err))
})

module.exports = router;
