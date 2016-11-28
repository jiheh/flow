import axios from 'axios';
import { browserHistory } from 'react-router';

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
  console.log('login')
  axios.post('/auth/login', credentials)
  .then(res => {
    dispatch(set(JSON.parse(res.config.data).email))
    browserHistory.push('/dashboard');
  })
    .catch(err => console.error('Login unsuccessful', err));
};

export const logout = () => (dispatch) => {
  dispatch(remove());
  axios.get('/auth/logout')
    .catch(err => console.error('logout unsuccessful', err));
};

export const signup = credentials => (dispatch) => {
  axios.post('/api/organization/', credentials)
    .then(headAdmin =>{
      return headAdmin
    })
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error('Signup unsuccessful', err));
};
