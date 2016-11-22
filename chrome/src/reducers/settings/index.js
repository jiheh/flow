import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

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

export default handleActions({
  SET_SETTINGS: (state, { payload }) => {
    return payload;
  },
}, initialState);
