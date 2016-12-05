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

function generateLegitTitle(i) {
  const announcements = {
    0: "Welcome to Fullstack Academy!",
    1: "Junior Phase has begun!",
    2: "Prepare for Checkpoints!",
    3: "And so Senior Phase begins!",
    4: "Happy Thanksgiving!",
    5: "One Week Until Graduation!",
  }

  return announcements[i];
}

function generateLegitContents(i) {
  const contents = {
    0: "Fullstack Academy's 13-week Immersive Coding Bootcamp prepares you for software engineering roles at early-stage startups to world-class companies like Google, Facebook and Dropbox. Our JavaScript-focused curriculum combines the latest web technologies with traditional computer science concepts. You bring the passion, curiosity and dedication — we'll provide a world-class school for becoming an expert software developer.",
    1: "Junior Phase will last for a total of 6 weeks. Each day of Junior Phase will have you focus on a brand new workshop to learn a new programming tool / concept.",
    2: "There are three upcoming checkpoints. Each Checkpoint's repository has been pushed to the Cohort's github library. Make sure to review all of the preparatory material!",
    3: "Senior Phase will last for a total of 6 weeks. Each day of Senior Phase will have you working on large projects and interview-style questions to prepare you for the job search!",
    4: "Eat, rest, and code! Enjoy the holidays everybody!",
    5: "You will all be graduating in exactly one week! Make sure to have your resumes completed by Wednesday, and make sure to deploy the latest versions of your Capstone Projects!",
  }

  return contents[i];
}

const createAnnouncements = (adminInstance, channelInstance, n, idx) => {
  if (idx !== 1) {
    console.log(`Creating ${n + 1} announcements for ${channelInstance.name}`);
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
  } else {
    console.log(`Creating ${6} announcements for ${channelInstance.name}`);
    return Promise.map(_.range(5), (i) => {
      let admin;
      let announcement;

      return Announcement.create({
        title: generateLegitTitle(i),
        contents: generateLegitContents(i),
      })
      .then((foundAnnouncement) => {
        announcement = foundAnnouncement;
        return channelInstance.addAnnouncement(announcement);
      })
      .then(() => {
        return adminInstance.addAnnouncement(announcement);
      });
    });
  }
};

module.exports = createAnnouncements;
