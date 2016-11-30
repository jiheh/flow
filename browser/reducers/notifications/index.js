import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  notifications: []
};


/* ------------   ACTIONS     ------------------ */
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

/* ------------   ACTION CREATORS     ------------------ */
export const receiveNotifications = createAction(RECEIVE_NOTIFICATIONS);

/* ------------   REDUCER     ------------------ */
export default handleActions({
  RECEIVE_NOTIFICATIONS: (state, { payload }) => {
    return { ...state, notifications: payload };
  }
}, initialState);

