const Account = require('../account/account.model')
const Organization = require('../organization/organization.model')

const createAccounts = (n) =>{
  let arrToReturn = [];  
  Account.create({
    type:'basic',
    maxStudents:10,
    cost:100
  })
  .then(() =>{
    Account.create({
      type:'medium',
      maxStudents:20, 
      cost:200
    })  
  })
  .then(() =>{
    Account.create({
      type:'pro',
      maxStudents:30, 
      cost:300
    })  
  })
  .then(() =>{
    for(let i=0;i<n;i++){
      let organizationGlobal;
      let randomNum = Math.floor(Math.random() * (n-1))
      const organizationPromise = Organization.findById(i+1)
      .then(organization =>{
        organizationGlobal = organization
        return Account.findById(randomNum)
      }).then(account =>{
        return organizationGlobal.addAccount(account)
      })
      arrToReturn.push(organizationPromise)   
    }
  }).then(() =>{
    console.log(arrToReturn.length)
    return Promise.all(arrToReturn)
  })
  
  
  
  
  
  
  // .then(() =>{
  //   for(let i=0;i<n;i++){
  //     let randomNum = Math.floor(Math.random() * 3) + 1 
  //     let promiseToResolve = Organization.findById(i+1)
  //     .then(organization =>{
  //       Account.findById(randomNum)
  //       .then(account =>{
  //         return organization.addAccount(account)
  //       })
  //     })
  //   }
  // })
}

module.exports = createAccounts;