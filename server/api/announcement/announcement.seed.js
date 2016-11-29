'use strict';

const Promise = require('bluebird');
const lorem = require('lorem-ipsum');
const _ = require('lodash');

const Announcement = require('./announcement.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');

function generateTitle() {

  const title = lorem({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 1,
    sentenceUpperBound: 6,
  });

  // remove ending period
  return title.slice(0,-1);
}

function generateContents() {
  return lorem({
    count: 1,
    units: 'paragraphs',
  });
}

const createAnnouncements = (adminInstance, channelInstance, n) => {
  return Promise.map(_.range(n), (i) => {
    let admin;
    let announcement;

    return Announcement.create({
      title: generateTitle(),
      contents: generateContents(),
    })
    .then((foundAnnouncement) => {
      announcement = foundAnnouncement;
      return channelInstance.addAnnouncement(announcement);
    })
    .then(() => {
      return adminInstance.addAnnouncement(announcement);
    });
  });
};

module.exports = createAnnouncements;
