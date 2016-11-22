import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

export const initialState = {
  viewportVisible: false,
  activeWidget: ''
};

export const propTypes = PropTypes.shape({
  // setting types
  viewportVisible: PropTypes.bool.isRequired,
  activeWidget: PropTypes.string.isRequired
});

export const TOGGLE_DOCKER_VIEWPORT = 'TOGGLE_DOCKER_VIEWPORT';
export const toggleDockerViewport = createAction(TOGGLE_DOCKER_VIEWPORT);

export default handleActions({
  TOGGLE_DOCKER_VIEWPORT: (state, { payload }) => { // payload should be name of the widget,
    // if hit same button, viewportVisible is false and reset activeWidget to null.
    if (state.activeWidget === payload){
      return {... state, viewportVisible: false, activeWidget: ''};
    } else { // if hit different bottom, stay open and change activeWidget
      return {... state, viewportVisible: true, activeWidget: payload};
    }

  },

}, initialState);
