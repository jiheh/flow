const Account = require('../account/account.model')
const Organization = require('../organization/organization.model')

const createAccounts = (n) => { 
  return Account.create({
    type:'basic',
    maxStudents:10,
    cost:100
  })
  .then(() => {
    return Account.create({
      type:'medium',
      maxStudents:20, 
      cost:200
    })  
  })
  .then(() => {
    return Account.create({
      type:'pro',
      maxStudents:30, 
      cost:300
    })  
  })
  .then(() =>{
    const orgPromiseArr = [];
    for(let i=1; i<=n; i++) {
      let organizationGlobal;
      let randomNum = Math.floor(Math.random() * 3) + 1;
      const orgPromise = Organization.findById(i)
      .then(organization => {
        organizationGlobal = organization
        return Account.findById(randomNum)
      }).then(account => {
        console.log(organizationGlobal.id,account.id)
        return organizationGlobal.addAccount(account)
      });
      orgPromiseArr.push(orgPromise);
    }
    return Promise.all(orgPromiseArr);
  })
}

module.exports = createAccounts;