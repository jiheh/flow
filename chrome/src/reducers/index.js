import { combineReducers } from 'redux';
import { outerReducer } from 'redux-async-initial-state';

import meditationWidget from './widgets/meditationWidget';
import quote from './quote';
import surveyQuestions from './surveyQuestions';
import announcements from './announcements';
import surveys from './surveys';
import settings from './settings';
import docker from './docker';
import user from './user';

export default outerReducer(combineReducers({
  meditationWidget,
  announcements,
  quote,
  surveys,
  surveyQuestions,
  settings,
  docker,
  user,
}));
