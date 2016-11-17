import { createAction, handleActions } from 'redux-actions';

const initialState = '';

export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const setImageUrl = createAction(SET_IMAGE_URL);

export default handleActions({
  SET_IMAGE_URL: (state, { payload }) => {
    return payload;
  },
}, initialState);
