const Admin = require('../admin/admin.model')
const Channel = require('../channel/channel.model')
const Organization = require('../organization/organization.model')

const createOrganizations = (n) =>{
  let arrToReturn = [];
  for(let i=0;i<n;i++){
    let organizationGlobal;
    let randomNum = Math.floor(Math.random() * (n-1))
    const organizationPromise = Organization.create({
      name:`organization${i}`,
      address:'5 Hanover Square',
      email:`organization${i}@organization.organization`,
      phone:`12345678`,
      numberOfStudents:10
    }).then(organization =>{
      organizationGlobal = organization
      return Channel.findById(i+1)
    }).then(channel =>{
      return channel.update({organization_id:organizationGlobal.id})
    }).then(() =>{
      return Admin.findById(randomNum + 1)
    }).then((admin)=>{
      return organizationGlobal.update({head_id:admin.id})
    })
    arrToReturn.push(organizationPromise)   
  }
  return Promise.all(arrToReturn)
}

module.exports = createOrganizations;
