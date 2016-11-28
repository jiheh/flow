const router = require('express').Router(); // eslint-disable-line new-cap
const Admin = require('../admin/admin.model')
const Channel = require('./channel.model')
const User = require('../user/user.model')
// Get all Channels for a specific admin
router.get('/allChannels',(req,res) =>{  
  Channel.findAll({
    include:[{
      model:User
    }]
  })
  .then(channels =>{
    res.status(209).send(channels)
  })
})


// Get one Channel
module.exports = router
