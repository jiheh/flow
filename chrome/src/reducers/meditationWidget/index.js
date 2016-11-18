import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

let initialState = {
  visible: false,
};

export let propTypes = {
  meditationWidget: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
  }),
};

export let TOGGLE_MEDITATION_VISIBLE = 'TOGGLE_MEDITATION_VISIBLE';
export let toggleMeditationVisible = createAction(TOGGLE_MEDITATION_VISIBLE);

export default handleActions({
  TOGGLE_MEDITATION_VISIBLE: (state, { payload }) => {
    return { ...state, visible: !state.visible };
  },
}, initialState);
