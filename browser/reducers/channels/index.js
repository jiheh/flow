import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  currentChannel: {},
  allChannels: []
};


/* ------------   ACTIONS     ------------------ */
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_SURVEY_TO_CURRENT = 'ADD_SURVEY_TO_CURRENT';
export const ADD_NOTIFICATION_TO_CURRENT = 'ADD_NOTIFICATION_TO_CURRENT';
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const RECEIVE_ADMINS = 'RECEIVE_ADMINS';

/* ------------   ACTION CREATORS     ------------------ */
export const receiveChannels = createAction(RECEIVE_CHANNELS);
export const receiveUsers = createAction(RECEIVE_USERS);
export const setCurrentChannel = createAction(SET_CURRENT_CHANNEL);
export const addSurveyToCurrent = createAction(ADD_SURVEY_TO_CURRENT);
export const addNotificationToCurrent = createAction(ADD_NOTIFICATION_TO_CURRENT);
export const addChannel = createAction(ADD_CHANNEL);
export const receiveAdmins = createAction(RECEIVE_ADMINS);

/* ------------   REDUCER     ------------------ */
export default handleActions({
  RECEIVE_CHANNELS: (state, { payload }) => {
    const newCurrentChannel = payload.length ? payload[0] : {};
    return { ...state, allChannels: payload};
  },
  SET_CURRENT_CHANNEL: (state, { payload }) => {
    return { ...state, currentChannel: payload }
  },
  RECEIVE_USERS: (state, { payload }) =>{
    let newCurrentChannel = { ...state.currentChannel, users: payload }
    let newChannels = state.allChannels.map(channel => {
      if (channel.id === newCurrentChannel.id) return newCurrentChannel;
      return channel;
    });
    return Object.assign({}, state, {
      currentChannel: newCurrentChannel,
      allChannels: newChannels,
    });
  },
  RECEIVE_ADMINS: (state, { payload }) => {
    let newCurrentChannel = { ...state.currentChannel, admins: payload }
    let newChannels = state.allChannels.map(channel => {
      if (channel.id === newCurrentChannel.id) return newCurrentChannel;
      return channel;
    });
    return Object.assign({}, state, {
      currentChannel: newCurrentChannel,
      allChannels: newChannels,
    });
  },
  ADD_SURVEY_TO_CURRENT: (state, { payload }) => {
    const newCurrent = {...state.currentChannel,
                        surveys: [payload, ...state.currentChannel.surveys]
                       };
    const newAll = state.allChannels.map(channel => {
      if (channel.id === state.currentChannel.id) {
        return newCurrent;
      } else {
        return channel;
      }
    });
    return { currentChannel: newCurrent, allChannels: newAll };
  },
  ADD_NOTIFICATION_TO_CURRENT: (state, { payload }) => {
    const newCurrent = {...state.currentChannel,
                        announcements: [payload, ...state.currentChannel.announcements]
                       };
    const newAll = state.allChannels.map(channel => {
      if (channel.id === state.currentChannel.id) {
        return newCurrent;
      } else {
        return channel;
      }
    });
    return { currentChannel: newCurrent, allChannels: newAll };
  },

  ADD_CHANNEL: (state, { payload }) => {
    return { ...state, allChannels: [payload, ...state.allChannels] };
  },
}, initialState);
