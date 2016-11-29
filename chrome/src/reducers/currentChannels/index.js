import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = [];

//export const propTypes = PropTypes.arrayOf(PropTypes.shape(channelName: PropTypes.string.isRequired));

export const UPDATE_CURRENT_CHANNELS = 'UPDATE_CURRENT_CHANNELS';
export const updateCurrentChannels = createAction(UPDATE_CURRENT_CHANNELS);

export const CLEAR_CURRENT_CHANNELS = 'CLEAR_CURRENT_CHANNELS';
export const clearCurrentChannels = createAction(CLEAR_CURRENT_CHANNELS);

export default handleActions({
  UPDATE_CURRENT_CHANNELS: (state, { payload }) => {
    return payload;
  },

  CLEAR_CURRENT_CHANNELS: (state, { payload }) => {
    return initialState;
  },
}, initialState);
