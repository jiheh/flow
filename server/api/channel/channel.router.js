const router = require('express').Router(); // eslint-disable-line new-cap
const Admin = require('../admin/admin.model')
const Channel = require('./channel.model')
const User = require('../user/user.model')
// Get all Channels for a specific admin
router.get('/allChannels/',(req,res) =>{
  let globalChannels;
  Channel.findAll({
    include:[{all:true}]
  })
  .then(channels =>{
    return channels.filter(channel =>{
      let returnVal = false
      let listOfPossibleAdmins = channel.admins
      for(var i in listOfPossibleAdmins){
        let idCheck;
        if(req.user) idCheck = req.user.id
        if(idCheck && listOfPossibleAdmins[i].id === idCheck){
          returnVal = true
        }
      }
      return returnVal
    })
  })
  .then(channels =>{
    res.status(209).send(channels)
  })
})


// Get one Channel
module.exports = router
