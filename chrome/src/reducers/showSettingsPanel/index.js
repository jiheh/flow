import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = false;

export const propTypes = {
  showSettingsPanel: PropTypes.bool.isRequired,
};

export const TOGGLE_SETTINGS_PANEL = 'TOGGLE_SETTINGS_PANEL';
export const toggleSettingsPanel = createAction(TOGGLE_SETTINGS_PANEL);

export default handleActions({
  TOGGLE_SETTINGS_PANEL: (state, { payload }) => {
    return !state;
  },
}, initialState);
