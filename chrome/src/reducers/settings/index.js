/* global chrome */

/* eslint-disable arrow-body-style */

import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';
import { propTypes as userPropTypes } from '../user';

import { LOGOUT } from '../user';

export const initialState = {
  // default settings
  showVideo: false,
};

export const propTypes = PropTypes.shape({
  // setting types
  showVideo: PropTypes.bool.isRequired,
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
}, initialState);
