import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = '';

export const propTypes = PropTypes.string.isRequired;

export const SET_AUTHOR = 'SET_AUTHOR';
export const setAuthor = createAction(SET_AUTHOR);

export default handleActions({
  SET_AUTHOR: (state, { payload }) => {
    return payload;
  },
}, initialState);
