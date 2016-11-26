import { combineReducers } from 'redux';
import organization from './organization';
import auth from './auth';
import channels from './channels';

export default combineReducers({ 
  organization,
  currentAdmin: auth,
  channels,
});
