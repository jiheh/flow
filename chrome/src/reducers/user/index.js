/* global chrome */

import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = {
  name: '',
  hash: '',
};

chrome.storage.sync.get('user', (result) => {
  if (!result) {
    chrome.storage.sync.set({ user: initialState });
  }
});

export const propTypes = PropTypes.shape({
  name: PropTypes.string,
  hash: PropTypes.string,
});

export const SET_USER = 'SET_USER';
export const setUser = createAction(SET_USER);

export const LOGOUT = 'LOGOUT';
export const logoutUser = createAction(LOGOUT);

export default handleActions({
  SET_USER: (state, { payload }) => {
    return payload;
  },

  LOGOUT: (state, { payload }) => {
    return initialState;
  },
}, initialState);
