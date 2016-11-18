import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';
import meditationWidget from './meditationWidget';
import settings from './settings';
import showSettingsPanel from './showSettingsPanel';

export default combineReducers({
  backgroundImage,
  backgroundVideo,
  meditationWidget,
  settings,
  showSettingsPanel,
});
