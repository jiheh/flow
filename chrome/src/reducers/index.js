import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';

import meditationWidget from './widgets/meditationWidget';
import quote from './quote';
import surveyQuestions from './surveyQuestions';
import announcements from './widgets/announcementWidget';

import settings from './settings';
import docker from './docker';

export default combineReducers({
  backgroundImage,
  backgroundVideo,
  meditationWidget,
  announcements,
  quote,
  surveyQuestions,
  settings,
  docker,
});
