'use strict';

const db = require('./_db');
const Account = require('./api/account/account.model');
const Admin = require('./api/admin/admin.model');
const Channel = require('./api/channel/channel.model');
const Billing = require('./api/billing/billing.model');
const Organization = require('./api/organization/organization.model');
const Response = require('./api/response/response.model');
const Survey = require('./api/survey/survey.model');
const User = require('./api/users/user.model');
const UserInfo = require('./api/userInfo/userInfo.model');

// User
User.belongsToMany(Channel, { through: 'User-Channel' });
User.belongsTo(UserInfo,{as:'UserInfo'})

// Admin
Admin.belongsToMany(Channel, { through: 'Admin-Channel' });
Admin.belongsToMany(Organization, { through: 'Admin-Organization' });
Admin.belongsTo(UserInfo,{as:'UserInfo'})

// Channel
Channel.belongsToMany(User, { through: 'User-Channel' });
Channel.belongsToMany(Admin, { through: 'Admin-Channel' });
Channel.belongsTo(Organization, { as: 'Channel' });

// Organization
Organization.belongsTo(Account, { as: 'Account' });
Organization.belongsTo(Billing, { as: 'Billing' });

Organization.belongsTo(Admin, { as: 'Head' });
Organization.belongsToMany(Admin, { through: 'Admin-Organization' });

module.exports = db;
