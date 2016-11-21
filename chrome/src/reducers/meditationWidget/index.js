import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = {
  visible: false,
};

export const propTypes = PropTypes.shape({
  meditationWidget: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
  }),
});

export const TOGGLE_MEDITATION_VISIBLE = 'TOGGLE_MEDITATION_VISIBLE';
export const toggleMeditationVisible = createAction(TOGGLE_MEDITATION_VISIBLE);

export default handleActions({
  TOGGLE_MEDITATION_VISIBLE: (state, { payload }) => {
    return { ...state, visible: !state.visible };
  },
}, initialState);
