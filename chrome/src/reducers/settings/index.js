import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = {
  // default settings
  showClock: true,
};

export const propTypes = {
  // setting types
  showClock: PropTypes.bool,
};

export const SET_SETTINGS = 'SET_SETTINGS';
export const setSettings = createAction(SET_SETTINGS);

export default handleActions({
  SET_SETTINGS: (state, { payload }) => {
    return payload;
  },
}, initialState);
