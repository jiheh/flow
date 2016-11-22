const Billing = require('../billing/billing.model')
const Organization = require('../organization/organization.model')

const createBillings = (n) =>{
  let arrToReturn = [];
  for(let i=0;i<n;i++){
    let billingGlobal;
    const billingPromise = Billing.create({
      cardNumber:i*(Math.floor(Math.random() * 9876543)),
      cardType:'visa',
      expiryDate:Math.floor(Math.random()*1000),
      securityNumber:Math.floor(Math.random()*1000)
    }).then(billing =>{
      billingGlobal = billing
      return Organization.findById(i+1)
    }).then(organization =>{
      return organization.update({billing_id:billingGlobal.id})
    })
    arrToReturn.push(billingPromise)   
  }
  return Promise.all(arrToReturn)
}

module.exports = createBillings; 