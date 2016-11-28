import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  currentChannel: {},
  allChannels: []
};


/* ------------   ACTIONS     ------------------ */
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';

/* ------------   ACTION CREATORS     ------------------ */
export const receiveChannels = createAction(RECEIVE_CHANNELS);
export const setCurrentChannel = createAction(SET_CURRENT_CHANNEL);

/* ------------   REDUCER     ------------------ */
export default handleActions({
  RECEIVE_CHANNELS: (state, { payload }) => {
    return {... state, allChannels: payload};
  },
  SET_CURRENT_CHANNEL: (state, { payload }) => {
    return {... state, currentChannel: payload}
  }
}, initialState);

