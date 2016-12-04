import { combineReducers } from 'redux';
import organization from './organization';
import auth from './auth';
import channels from './channels';
import surveys from './surveys';
import isOrgHead from './organizations'

export default combineReducers({
  organization,
  currentAdmin: auth,
  channels,
  surveys,
  isOrgHead,
});
