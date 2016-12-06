// Survey Seeding
// Surveys will be hard coded so that they make sense
'use strict';

const Promise = require('bluebird');
const lorem = require('lorem-ipsum');
const _ = require('lodash');
const chalk = require('chalk');

const Survey = require('./survey.model');
const User = require('../user/user.model');
const Question = require('../question/question.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');
const UserInfo = require('../userInfo/userInfo.model');

const surveyDataCreator = require('../survey.data');

function createDates() {
	let firstPart = "2017-";
	let secondPart = " 19:00:00-05";
	let array = [];
	let decFirst = "2016-12-";
	let decSecond = " 19:00:00-05";
	for (let q = 5; q <= 31; q++) {
		let currentq = q < 10 ? "0" + q.toString() : q.toString();
		array.push(decFirst + currentq + decSecond);
	}
  let k;
	for (let i = 1; i <= 12; i++) {
		let currenti = i < 10 ? "0" + i.toString() : i.toString();
		let thiryones = [1, 3, 5, 7, 8, 10, 12];
		let thirtys = [4, 6, 9, 11];
		if (thiryones.includes(i)) {
			k = 31;
		} else if (thirtys.includes(i)) {
			k = 30;
		} else {
			k = 28;
		}
		for (let j = 1; j <= k; j++) {
			let currentj = j < 10 ? "0" + j.toString() : j.toString();
			array.push(firstPart + currenti + "-" + currentj + secondPart);
		}
	}
	return array;
}

const createSurveys = () => {
  // const surveysToCreate = surveyDataCreator(4, -1, -1);
  let globalAdmin;
  let globalChannel;
  let firstGlobalSurvey;

  return UserInfo.findOne({
    where: {
      email: "globaladmin@flow.com"
    }
  })
  .then((userInfo) => {
    return Admin.findByUserInfoId(userInfo.id);
  })
  .then((foundAdmin) => {
    globalAdmin = foundAdmin;
    return Channel.findOne({
      where: {
        name: "Global Channel"
      }
    });
  })
  .then((foundChannel) => {
    globalChannel = foundChannel;
    return Survey.create({
      name: "Global Survey #1",
      description: "Recurring Global Well-being Survey",
      active: true,
      frequency: createDates()
    });
  })
  .then((survey) => {
    firstGlobalSurvey = survey;
    return firstGlobalSurvey.createQuestion({
      text: "How was your day?",
      type: "emoji"
    });
  })
  .then(() => Promise.all([
    firstGlobalSurvey.setOwner(globalAdmin),
    globalAdmin.addSurvey(firstGlobalSurvey),
    firstGlobalSurvey.setChannel(globalChannel),
  ]))
  .then(() => {
    return globalChannel.getUsers();
  })
  .then((users) => {
    return firstGlobalSurvey.setUsers(users);
  })
  .then(() => {
    console.log("Recurring global survey seeded");
  })
}

module.exports = createSurveys;
