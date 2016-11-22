import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = '';

export const propTypes = PropTypes.string.isRequired;

export const SET_QUOTE = 'SET_QUOTE';
export const setQuote = createAction(SET_QUOTE);

export default handleActions({
  SET_QUOTE: (state, { payload }) => {
    return payload;
  },
}, initialState);
