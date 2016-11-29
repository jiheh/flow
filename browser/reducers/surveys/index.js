import { createAction, handleActions } from 'redux-actions';

export const initialState = [];

export const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS';
export const receiveSurveys = createAction(RECEIVE_SURVEYS);

export default handleActions({
  RECEIVE_SURVEYS: (state, { payload }) => {
    return {... state, allChannels: payload};
  },
}, initialState);
