const Admin = require('./admin.model')
const UserInfo = require('../userInfo/userInfo.model')


const createAdmin = credentials =>{
  let globalUser;
  return UserInfo.create({ 
      email:credentials.email,
      name:credentials.name,
      password:credentials.password
  })
  .then(user =>{
    globalUser = user 
    return Admin.create({})
  })
  .then(admin =>{
    return admin.setUserInfo(globalUser)
  })
  

}


module.exports = {createAdmin}
