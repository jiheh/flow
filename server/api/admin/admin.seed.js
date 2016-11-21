const UserInfo = require('../userInfo/userInfo.model')
const Admin = require('../admin/admin.model')

const createAdmins = (n) =>{
  let arrToReturn = [];
  for(var i=0;i<n;i++){
    let userGlobal;
    const userPromise = UserInfo.create({
      name:`admin${i}`,
      email:`admin${i}@admin.com`,
      password:`1234`
    }).then(userInfo =>{
      userGlobal = userInfo
      return Admin.create({})
    }).then(admin =>{
      return admin.update({user_info_id:userGlobal.id})
    })
    arrToReturn.push(userPromise)   
  }
  return Promise.all(arrToReturn)
}

module.exports = createAdmins;
