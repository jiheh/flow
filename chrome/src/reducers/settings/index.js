// eslint-disable arrow-body-style

import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';
import { propTypes as userPropTypes } from '../user';

import { LOGOUT } from '../user';

export const initialState = {
  // default settings
  showVideo: false,
  user: {
    name: '',
    hash: '',
  },
};

export const propTypes = PropTypes.shape({
  // setting types
  showVideo: PropTypes.bool.isRequired,
  user: userPropTypes,
});

export const SET_SETTINGS = 'SET_SETTINGS';
export const setSettings = createAction(SET_SETTINGS);

export const SET_SETTING = 'SET_SETTING';
export const setSetting = createAction(SET_SETTING);

export default handleActions({
  SET_SETTINGS: (state, { payload }) => {
    return payload;
  },

  SET_SETTING: (state, { payload }) => {
    return { ...state, ...payload };
  },

  LOGOUT: (state, { payload }) => {
    return {
      ...state, 
      user: {
        name: '',
        hash: '',
      },
    };
  },
}, initialState);
