import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = [];

export const propTypes = PropTypes.array;

export const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS';
export const receiveSurveys = createAction(RECEIVE_SURVEYS);

export default handleActions({
  RECEIVE_SURVEYS: (state, { payload }) => {
    return payload;
  },
}, initialState);
