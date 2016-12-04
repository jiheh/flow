import { createAction, handleActions } from 'redux-actions';

export const initialState = false;

export const IS_ORG_HEAD = 'IS_ORG_HEAD';
export const isOrgHead = createAction(IS_ORG_HEAD);

export default handleActions({
  IS_ORG_HEAD: (state, { payload }) => {
    return {... state, allChannels: payload};
  },
}, initialState);
