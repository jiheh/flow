import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

let SET    = 'SET_CURRENT_USER'
let REMOVE = 'REMOVE_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

let set     = user => ({ type: SET, user })
let remove  = () => ({ type: REMOVE })

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = null, action) {
  switch (action.type) {
    
    case SET: 
      return action.user;

    case REMOVE: 
      return null;  

    default: 
      return currentUser;
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
