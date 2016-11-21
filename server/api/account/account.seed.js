const Account = require('../account/account.model')
const Organization = require('../organization/organization.model')

const createAccounts = (n) =>{
  let typeOfAccount;
  let arrToReturn = [];
  let accountGlobal;
  let maxStudents;
  let cost;
  for(let i=0;i<n;i++){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 2){typeOfAccount = 'basic' ; maxStudents = 10 ; cost = 100 ;}   
    else if(randomNum === 1){typeOfAccount = 'medium' ; maxStudents = 20 ; cost = 200 ;}
    else{typeOfAccount = 'pro' ; maxStudents = 30 ; cost = 300 ;}
    let accountPromise = Account.create({
      name:`account${i}`,
      type: typeOfAccount,
      maxStudents: maxStudents,
      cost: cost,
    }).then(account => {
      accountGlobal = account;
      return Organization.findById(i+1);
    }).then(organization =>{
      return organization.update({account_id:i+1})
    });
    arrToReturn.push(accountPromise)   
  }
  return Promise.all(arrToReturn)
}

module.exports = createAccounts;