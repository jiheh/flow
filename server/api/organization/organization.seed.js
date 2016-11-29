const Admin = require('../admin/admin.model');
const Channel = require('../channel/channel.model');
const Organization = require('../organization/organization.model');
const Chance = require('chance');
const chance = new Chance();

const createOrganizations = (admin) =>{

  console.log(`\tAn Organization is being created for Admin ${admin.id}`);

  let organizationGlobal;

  return Organization.create({
    name:`${chance.pickone(['Yale University', 'Fullstack Academy', 'Birmingham University'])}`,
    type:`University`,
    address:'5 Hanover Square',
    email:`organization@organization.com`,
    phone:`12345678`,
    numberOfStudents:chance.integer({min: 10, max: 50}),
  })
  .then(organization =>{
    organizationGlobal = organization
    return admin.getChannels();
  })
  .then(channels =>{
    return Promise.all(channels.map(channel => {
      return channel.setOrganization(organizationGlobal);
    }))
  })
  .then(()=>{
    return organizationGlobal.setHead(admin);
  })

}

module.exports = createOrganizations;