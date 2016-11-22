import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET    = 'SET_CURRENT_ADMIN'
const REMOVE = 'REMOVE_CURRENT_ADMIN'

/* ------------   ACTION CREATORS     ------------------ */

const set     = admin => ({ type: SET, admin })
const remove  = () => ({ type: REMOVE })

/* ------------       REDUCER     ------------------ */

export default function reducer (currentAdmin = null, action) {
  switch (action.type) {
    case SET: 
      return action.admin;
    case REMOVE:
      return null;
    default: 
      return currentAdmin;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const login = credentials => (dispatch) => {
  axios.post('/auth/login', credentials)
  .then(res => {
    // Need to set just the e-mail to currentAdmin
    dispatch(set(res.config.data))
  })
    .catch(err => console.error('Login unsuccessful', err));
};

export const signup = credentials => (dispatch) => {
  axios.post('/auth/signup', credentials)
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error('Signup unsuccessful', err));
};

export const retrieveLoggedInUser = () => (dispatch) => {
  axios.get('/auth/me')
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error('retrieveLoggedInUser unsuccessful', err));
};

// optimistic
export const logout = () => (dispatch) => {
  dispatch(remove());
  axios.get('/auth/logout')
    .catch(err => console.error('logout unsuccessful', err));
};
