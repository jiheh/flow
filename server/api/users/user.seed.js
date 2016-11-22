const UserInfo = require('../userInfo/userInfo.model')
const User = require('../users/user.model')

const createUsers = (n) =>{
  let arrToReturn = [];
  for(var i=0;i<n;i++){
    let userGlobal;
    const userPromise = UserInfo.create({
      name:`user${i}`,
      type:`user`,
      email:`user${i}@user.com`,
      password:`123`
    }).then(userInfo =>{
      userGlobal = userInfo
      return User.create({})
    }).then(user =>{
      return user.update({user_info_id:userGlobal.id})
    })
    arrToReturn.push(userPromise)   
  }
  return Promise.all(arrToReturn)
}

module.exports = createUsers;
