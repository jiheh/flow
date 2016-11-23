const router = require('express').Router(); // eslint-disable-line new-cap
const Organization = require('./organization.model')
const Account = require('../account/account.model')
const Billing = require('../billing/billing.model')
const axios = require('axios')
const adminMethods = require('../admin/admin.methods')

//Create a new Organization
router.post('/',(req,res,next) =>{
  let globalOrganization;
  Organization.create({
    name:req.body.organizationName,
    type:req.body.organizationType,
    address:req.body.address,
    phone:req.body.phone,
    numberOfStudents:0
  })
  .then(organization =>{
    globalOrganization = organization
    return Account.findOne({
      where:{
        type:req.body.accountType
      }
    })
  })
  .then(account =>{  
    return globalOrganization.setAccount(account)
  })
  .then(() =>{
    let dataToSendToAdmin = {
      name:req.body.adminName,
      email:req.body.email,
      password:req.body.password,
    }
    return adminMethods.createAdmin(dataToSendToAdmin)
  })
  .then(admin =>{
    globalOrganization.update({head_id:admin.id})
  })
  .then(() =>{
    if(req.body.billing){
      return Billing.create({
        cardType:'mastercard',
        cardNumber:req.body.billing.cardNumber,
        expiryDate:req.body.billing.expiryDate,
        securityNumber:req.body.billing.securityNumber
      })
    }
    return 
  })
  .then(billing =>{ 
    if(billing) return globalOrganization.update({billing_id:billing.id})
    return globalOrganization
  })
  .then(globalOrg =>{
    globalOrganization = globalOrg
    res.status(209).send(globalOrganization)
  })
  .catch(err => console.log(err))
})


router.get('/',(req,res,next) =>{
  res.json('fggch ')
})

module.exports = router