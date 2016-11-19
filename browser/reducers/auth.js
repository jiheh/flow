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

export let login = credentials => dispatch => {
  axios.post('/auth/login', credentials)
       .then(res => dispatch(set(res.data)))
       .catch(err => console.error('Login unsuccessful', err));
}

export let signup = credentials => dispatch => {
  axios.post('/auth/signup', credentials)
       .then(res => dispatch(set(res.data)))
       .catch(err => console.error('Signup unsuccessful', err));
}

export let retrieveLoggedInUser = () => dispatch => {
  axios.get('/auth/me')
      .then(res => dispatch(set(res.data)))
      .catch(err => console.error('retrieveLoggedInUser unsuccessful', err));
}

// optimistic
export let logout = () => dispatch => {
  dispatch(remove())
  axios.get('/auth/logout')  
       .catch(err => console.error('logout unsuccessful', err));
}
