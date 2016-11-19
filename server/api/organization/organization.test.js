let chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

let db = require('../../_db');
let Organization = require('./organization.model');

describe('Organization', () => {

  let emptyName = {
    name: '',
    address: '5 Hanover Square, Floor 25, New York, NY 10004',
    email: 'fullstack@fullstack.com',
    phone: '123-456-7890'
  };

  let notEmail = {
    name: 'Fullstack Academy',
    address: '5 Hanover Square, Floor 25, New York, NY 10004',
    email: 'fullstack.com',
    phone: '123-456-7890'
  };

  let nullPhone = {
    name: 'Fullstack Academy',
    address: '5 Hanover Square, Floor 25, New York, NY 10004',
    email: 'fullstack@fullstack.com'
  };

  it('should not be created an empty name', () => {
    return Organization.create(emptyName).should.be.rejected;
  });

  it('should not be created with a wrong email', () => {
    return Organization.create(notEmail).should.be.rejected;
  });

  it('should not be created wihtout a phone number', () => {
    return Organization.create(nullPhone).should.be.rejected;
  });
});
