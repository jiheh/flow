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

const createAnnouncements = (n) => {
  return Promise.map(_.range(n), (i) => {
    let admin;
    let announcement;

    return Admin.findById(Math.floor(Math.random() * 10) + 1)
      .then((foundAdmin) => {
        admin = foundAdmin;

        return Announcement.create({
          title: generateTitle(),
          contents: generateContents(),
          admin_id: admin.id,
        });
      })
      .then((foundAnnouncement) => {
        announcement = foundAnnouncement;
        return Channel.findById(Math.floor(Math.random() * 10) + 1);
      })
      .then((channel) => {
        return channel.addAnnouncement(announcement);
      });
  });
};

module.exports = createAnnouncements;
