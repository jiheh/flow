import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = [];

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
}));

export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS';
export const receiveAnnouncements = createAction(RECEIVE_ANNOUNCEMENTS);

export default handleActions({
  RECEIVE_ANNOUNCEMENTS: (state, { payload }) => {
    return payload;
  },
}, initialState);
