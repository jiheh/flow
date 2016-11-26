const router = require('express').Router(); // eslint-disable-line new-cap
const Admin = require('./admin.model')
const UserInfo = require('../userInfo/userInfo.model')

//Create a new Organization
router.post('/',(req,res,next) =>{
  console.log('in admin router')
  return Admin.findById(1)
})


module.exports = router
