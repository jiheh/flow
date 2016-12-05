const supertest = require('supertest-as-promised').agent(require('../../app/'));
const expect = require('chai').expect();
const User = require('../user/user.model');
const UserInfo = require('../userInfo/userInfo.model');

const testUser = {
  name: "Test User",
  email: "test@testing.com",
  password: "testtest",
}

const testAdminCredentials = {
  name: "Admin User",
  email: "clementadmin@clementadmin.com",
  password: "clementadmin123456",
}


describe('User Routes', () => {

  describe('Admins', () => {

    beforeEach(() => {
      // log in admin
      return supertest
        .post('/auth/login')
        .send(testAdminCredentials)
    })

    it('should be able to view all users in their channel', () => {
      return supertest
        .get('/api/users/allUsers/1')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  })

  describe('Users', () => {

    before(() => {
      return UserInfo.findOne({where: {email: testUser.email}})
              .then(userInfo => {
                return userInfo.getUser()
                  .then(user => {
                    return user.destroy()
                  })
                  .then(() => {
                    userInfo.destroy();
                  })
              })

    })

    it('should be able to create a new user if unregistered', () => {
      return supertest
        .post('/api/users/')
        .send(testUser)
        .expect(201)
    })

    it('should be able to log-in if previously registered', () => {
      return supertest
        .post('/api/users/')
        .send(testUser)
        .expect(302)
    })


  })

})