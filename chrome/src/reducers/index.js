import { combineReducers } from 'redux';

import backgroundImage from './backgroundImage';
import backgroundVideo from './backgroundVideo';
import meditationWidget from './widgets/meditationWidget';
import settings from './settings';
import docker from './docker';
import user from './user';

export default combineReducers({
  backgroundImage,
  backgroundVideo,
  settings,
  docker,
  user,
});
