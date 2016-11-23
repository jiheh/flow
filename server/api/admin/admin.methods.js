const Admin = require('./admin.model')
const UserInfo = require('../userInfo/userInfo.model')
const bcrypt = require('bcrypt');

const createOrFindAdmin = credentials =>{
  let needToCreateAdmin;
  return UserInfo.findOrCreate({ 
    where:{
      email:credentials.email,
      name:credentials.email,
    }
  })
  .spread((user,created) =>{
    if(created){ 
      needToCreateAdmin = true
      let pass = bcrypt.hashSync(credentials.password,10)
      return user.update({password_digest:pass})
    }
    //Found userInfo
    else{
      //Comparison of passwords
      let passwordCorrect = bcrypt.compareSync(credentials.password,user.password_digest)
      if(!passwordCorrect) throw new Error('incorrect password m8')
      return user
    }
  })
  .then(userInfoUpdated =>{
    if(needToCreateAdmin){
      return Admin.create({})
      .then(admin =>{
        return admin.setUserInfo(userInfoUpdated)
      })
    }
    return Admin.findOne({where:{user_info_id:userInfoUpdated.id}})
  })
}


module.exports = createOrFindAdmin
