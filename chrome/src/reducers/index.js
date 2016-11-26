import { combineReducers } from 'redux';
import { outerReducer } from 'redux-async-initial-state';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';

import meditationWidget from './widgets/meditationWidget';
import quote from './quote';
import surveyQuestions from './surveyQuestions';
// import announcements from './widgets/announcementWidget';
import announcements from './announcements';

import settings from './settings';
import docker from './docker';
import user from './user';

export default outerReducer(combineReducers({
  backgroundImage,
  backgroundVideo,
  meditationWidget,
  announcements,
  quote,
  surveyQuestions,
  settings,
  docker,
  user,
}));
