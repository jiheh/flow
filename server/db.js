'use strict';

const db = require('./_db');
const Account = require('./api/account/account.model');
const Admin = require('./api/admin/admin.model');
const Channel = require('./api/channel/channel.model');
const Billing = require('./api/billing/billing.model');
const Organization = require('./api/organization/organization.model');
const Response = require('./api/response/response.model');
const Survey = require('./api/survey/survey.model');
const User = require('./api/user/user.model');
const UserInfo = require('./api/userInfo/userInfo.model');
const Announcement = require('./api/announcement/announcement.model');


// User
User.belongsToMany(Channel, { through: 'User-Channel' });
User.belongsTo(UserInfo, { as: 'UserInfo' });

// Admin
Admin.belongsToMany(Channel, { through: 'Admin-Channel' });
Admin.belongsTo(UserInfo, { as: 'UserInfo' });
Admin.hasMany(Announcement);

// Channel
Channel.belongsToMany(User, { through: 'User-Channel' });
Channel.belongsToMany(Admin, { through: 'Admin-Channel' });
Channel.belongsTo(Organization, { as: 'Organization' });
Channel.hasMany(Announcement);

// Organization
Organization.belongsToMany(Account, { through: 'Organization-Account' });
Organization.belongsTo(Billing, { as: 'Billing' });
Organization.belongsTo(Admin, { as: 'Head' });

// Announcement
Announcement.belongsToMany(Channel, { through: 'Channel-Announcement' });


module.exports = db;
