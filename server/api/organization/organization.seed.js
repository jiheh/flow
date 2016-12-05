const Admin = require('../admin/admin.model');
const Channel = require('../channel/channel.model');
const Organization = require('../organization/organization.model');
const Chance = require('chance');
const chance = new Chance();

const createOrganizations = (admins) =>{

  console.log("Creating Global Organization and Fullstack Academy");

  let globalOrg;
  let fullstackOrg;

  Organization.create({
    name: 'Global Organization',
    type: 'Global',
    address: 'Flow Avenue',
    email: 'flowglobal@flow.com',
    phone: '12345678',
    numberOfStudents: '9001',
  })
  .then((organization) => {
    globalOrg = organization;
    return admins[0].getChannels();
  })
  .then((channels) => {
    return Promise.all(channels.map((channel) => {
      return channel.setOrganization(globalOrg);
    }))
  })
  .then(() => {
    return globalOrg.setHead(admins[0]);
  });

  return Organization.create({
    name:`Fullstack Academy`,
    type:`University`,
    address:'5 Hanover Square',
    email:`fullstack@organization.com`,
    phone:`12345678`,
    numberOfStudents:chance.integer({min: 10, max: 50}),
  })
  .then((organization) => {
    fullstackOrg = organization;
    return admins[1].getChannels();
  })
  .then((channels) => {
    return Promise.all(channels.map((channel) => {
      return channel.setOrganization(fullstackOrg);
    }))
  })
  .then(() => {
    return fullstackOrg.setHead(admins[1]);
  });

}

module.exports = createOrganizations;
