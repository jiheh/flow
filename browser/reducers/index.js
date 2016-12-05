import { combineReducers } from 'redux';
import auth from './auth';
import channels from './channels';
import surveys from './surveys';
import isOrgHead from './organizations'

export default combineReducers({ 
  currentAdmin: auth,
  channels,
  surveys,
  isOrgHead,
});
