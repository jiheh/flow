/* global chrome */

/* eslint-disable arrow-body-style */

import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';
import { propTypes as userPropTypes } from '../user';

import { LOGOUT } from '../user';

export const initialState = false;

export const PLAY_AUDIO = 'PLAY_AUDIO';
export const switchAudioOn = createAction(PLAY_AUDIO);

export default handleActions({
  PLAY_AUDIO: (state, { payload }) => {
    return payload;
  },
}, initialState);
