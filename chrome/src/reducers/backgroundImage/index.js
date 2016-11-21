import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = '';

export const propTypes = PropTypes.string.isRequired;

export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const setImageUrl = createAction(SET_IMAGE_URL);

export default handleActions({
  SET_IMAGE_URL: (state, { payload }) => {
    return payload;
  },
}, initialState);
