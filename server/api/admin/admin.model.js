'use strict';

const db = require('../../_db');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

const Admin = db.define('admins', {
    name: Sequelize.STRING,  
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password_digest: Sequelize.STRING,
    password: Sequelize.VIRTUAL
  }, 
  {
    indexes: [{fields: ['email'], unique: true}],
    hooks: {
      beforeCreate: setEmailAndPassword,
      beforeUpdate: setEmailAndPassword
    },
    instanceMethods: {
      authenticate(plaintext) {
        console.log('password',plaintext)
        return new Promise((resolve, reject) =>
          bcrypt.compare(plaintext, this.password_digest,
            (err, result) =>
              err ? reject(err) : resolve(result))
          )
      }    
    }
})

function setEmailAndPassword(admin) { 
  admin.email = admin.email && admin.email.toLowerCase()
  if (!admin.password) return Promise.resolve(admin)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(admin.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  admin.set('password_digest', hash)
      resolve(admin)
	  })
  )
}

module.exports = Admin;


