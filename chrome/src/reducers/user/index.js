import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = {
  name: '',
  hash: '',
};

export const propTypes = PropTypes.shape({
  name: PropTypes.string,
  hash: PropTypes.string,
});

export const SET_USER = 'SET_USER';
export const setUser = createAction(SET_USER);

export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

export default handleActions({
  SET_USER: (state, { payload }) => {
    return payload;
  },

  LOGOUT: (state, { payload }) => {
    return initialState;
  },
}, initialState);
