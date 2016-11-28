'use strict';

const db = require('./_db');
const Account = require('./api/account/account.model');
const Admin = require('./api/admin/admin.model');
const Channel = require('./api/channel/channel.model');
const Billing = require('./api/billing/billing.model');
const Organization = require('./api/organization/organization.model');
const Response = require('./api/response/response.model');
const Survey = require('./api/survey/survey.model');
const Question = require('./api/question/question.model');
const User = require('./api/user/user.model');
const UserInfo = require('./api/userInfo/userInfo.model');
const Announcement = require('./api/announcement/announcement.model');


// User
User.belongsToMany(Channel, { through: 'User-ChannelItem' });
User.belongsTo(UserInfo, { as: 'UserInfo' });

// Admin
Admin.belongsToMany(Channel, { through: 'AdminChannel' });
Admin.belongsTo(UserInfo, { as: 'UserInfo' });
Admin.hasMany(Announcement);

// Channel
Channel.belongsToMany(User, { through: 'User-ChannelItem' });
Channel.belongsToMany(Admin, { through: 'Admin-ChannelItem' });
Channel.belongsTo(Organization, { as: 'Organization' });
Channel.hasMany(Announcement);

// Organization
Organization.belongsTo(Account, { as: 'Account' });
Organization.belongsTo(Billing, { as: 'Billing' });
Organization.belongsTo(Admin, { as: 'Head' });

// Questions and Surveys
Admin.hasMany(Survey); // Admin.getSurveys, get all surveys by this admin
Survey.belongsTo(Admin, {as: 'Owner'}); // Survey.getOwner

User.belongsToMany(Survey, {through: 'Survey-Participant'}); // When user asks the API, "What surveys do I have for today?" User.getSurveys({where: {active...
Survey.belongsToMany(User, {through: 'Survey-Participant'}); // Survey.getParticipants

Survey.belongsTo(Channel);
Channel.hasMany(Survey);

Response.belongsTo(User); // Question.getResponses({where: user...
User.hasMany(Response);

Question.hasMany(Response); // Question.getResponses
Response.belongsTo(Question); // Response.getQuestion

Survey.hasMany(Question);
Question.belongsTo(Survey);

// Announcement
Announcement.belongsToMany(Channel, { through: 'ChannelItem-Announcement' });

module.exports = db;
