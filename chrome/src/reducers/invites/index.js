import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = [];

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
  email: PropTypes.string.isRequired,
  channelId: PropTypes.number.isRequired,
  channelName: PropTypes.string.isRequired,
}));

export const RECEIVE_INVITES = 'RECEIVE_INVITES';
export const receiveInvites = createAction(RECEIVE_INVITES);

export default handleActions({
  RECEIVE_INVITES: (state, { payload }) => {
    return payload;
  },
}, initialState);
