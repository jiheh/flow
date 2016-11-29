import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  currentChannel: {},
  allChannels: []
};


/* ------------   ACTIONS     ------------------ */
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
export const RECEIVE_USERS = 'RECEIVE_USERS';

/* ------------   ACTION CREATORS     ------------------ */
export const receiveChannels = createAction(RECEIVE_CHANNELS);
export const receiveUsers = createAction(RECEIVE_USERS);
export const setCurrentChannel = createAction(SET_CURRENT_CHANNEL);

/* ------------   REDUCER     ------------------ */
export default handleActions({
  RECEIVE_CHANNELS: (state, { payload }) => {
    return {... state, allChannels: payload};
  },
  SET_CURRENT_CHANNEL: (state, { payload }) => {
    return {... state, currentChannel: payload}
  },
  RECEIVE_USERS: (state, { payload }) =>{
    let newObj = Object.assign({},state.currentChannel,{users:payload})
    return {... state, currentChannel: newObj}
  }
}, initialState);

