import { createAction, handleActions } from 'redux-actions';

export const initialState = {

  currentChannel: {id: "1", name: "Yale College", description: "All Yale College undergraduates", numMembers: 5236},

  allChannels: [
    {id: "1", name: "Yale College", description: "All Yale College undergraduates", numMembers: 5236},
    {id: "2", name: "BR 2019", description: "Branford Class of 2017", numMembers: 5236},
    {id: "3", name: "BR 2018", description: "Branford Class of 2016", numMembers: 457},
    {id: "4", name: "BR 2017", description: "Branford Class of 2016", numMembers: 458},
    {id: "5", name: "BR 2016", description: "Branford Class of 2015", numMembers: 443},
    {id: "6", name: "BR 2016", description: "Branford Class of 2015", numMembers: 443},
    {id: "7", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
    {id: "8", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
    {id: "9", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
    {id: "10", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
    {id: "11", name: "Yale Graduate School", description: "Yale University Graduate Students", numMembers: 540},
    {id: "12", name: "Yale Faculty", description: "All Yale Faculty", numMembers: 1203},
  ]};

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const receiveChannels = createAction(RECEIVE_CHANNELS);

export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
export const setCurrentChannel = createAction(SET_CURRENT_CHANNEL);

export default handleActions({
  RECEIVE_CHANNELS: (state, { payload }) => {
    return {... state, allChannels: payload};
  },
  SET_CURRENT_CHANNEL: (state, { payload }) => {
    return {... state, currentChannel: payload}
  }
}, initialState);
