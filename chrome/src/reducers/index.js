import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';
import meditationWidget from './meditationWidget';
import quote from './quote';
import surveyQuestions from './surveyQuestions';
import settings from './settings';
import showSettingsPanel from './showSettingsPanel';

export default combineReducers({
  backgroundImage,
  backgroundVideo,
  meditationWidget,
  quote,
  surveyQuestions,
  settings,
  showSettingsPanel,
});
