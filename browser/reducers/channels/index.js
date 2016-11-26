import { createAction, handleActions } from 'redux-actions';

export const initialState = [
  {_id: "57", name: "Yale College", description: "All Yale College undergraduates", numMembers: 5236},
  {_id: "54", name: "BR 2019", description: "Branford Class of 2017", numMembers: 5236},
  {_id: "53", name: "BR 2018", description: "Branford Class of 2016", numMembers: 457},
  {_id: "52", name: "BR 2017", description: "Branford Class of 2016", numMembers: 458},
  {_id: "51", name: "BR 2016", description: "Branford Class of 2015", numMembers: 443},
  {_id: "50", name: "BR 2016", description: "Branford Class of 2015", numMembers: 443},
  {_id: "49", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
  {_id: "48", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
  {_id: "47", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
  {_id: "46", name: "BK 2016", description: "Berkeley Class of 2015", numMembers: 443},
  {_id: "45", name: "Yale Graduate School", description: "Yale University Graduate Students", numMembers: 540},
  {_id: "13", name: "Yale Faculty", description: "All Yale Faculty", numMembers: 1203},
  ];

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const receiveChannels = createAction(RECEIVE_CHANNELS);

export default handleActions({
  RECEIVE_CHANNELS: (state, { payload }) => {
    return payload;
  },
}, initialState);
