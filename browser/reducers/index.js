import { combineReducers } from 'redux';
import organization from './organization';
import auth from './auth';

export default combineReducers({ 
  organization,
  currentAdmin: auth,
});
