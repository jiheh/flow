import { createAction, handleActions } from 'redux-actions';

const initialState = {
  visible: false,
};

export const TOGGLE_MEDITATION_VISIBLE = 'TOGGLE_MEDITATION_VISIBLE';
export const toggleMeditationVisible = createAction(TOGGLE_MEDITATION_VISIBLE);

export default handleActions({
  TOGGLE_MEDITATION_VISIBLE: (state, { payload }) => {
    return { ...state, visible: !state.visible };
  },
}, initialState);
