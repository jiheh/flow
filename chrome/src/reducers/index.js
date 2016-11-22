import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';
import meditationWidget from './meditationWidget';
import settings from './settings';

export default combineReducers({
  backgroundImage,
  backgroundVideo,
  meditationWidget,
  settings,
});
