import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

let initialState = '';

export let propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export let SET_IMAGE_URL = 'SET_IMAGE_URL';
export let setImageUrl = createAction(SET_IMAGE_URL);

export default handleActions({
  SET_IMAGE_URL: (state, { payload }) => {
    return payload;
  },
}, initialState);
