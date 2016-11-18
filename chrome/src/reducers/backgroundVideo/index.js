import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = '';

export const propTypes = {
  backgroundVideo: PropTypes.string.isRequired,
};

export const SET_VIDEO_URL = 'SET_VIDEO_URL';
export const setVideoUrl = createAction(SET_VIDEO_URL);

export default handleActions({
  SET_VIDEO_URL: (state, { payload }) => {
    return payload;
  },
}, initialState);
