import { combineReducers } from 'redux';

import meditationWidget from './widgets/meditationWidget';
import quote from './quote';
import surveyQuestions from './surveyQuestions';
// import announcements from './widgets/announcementWidget';
import announcements from './announcements';

import settings from './settings';
import docker from './docker';
import user from './user';

export default combineReducers({
  meditationWidget,
  announcements,
  quote,
  surveyQuestions,
  settings,
  docker,
  user,
});
