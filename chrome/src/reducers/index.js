import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import meditationWidget from './meditationWidget';
import settings from './settings';
import showSettingsPanel from './showSettingsPanel';

export default combineReducers({
  backgroundImage,
  meditationWidget,
  settings,
  showSettingsPanel,
});
