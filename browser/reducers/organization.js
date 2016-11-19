import axios from 'axios';

/* ------------   ACTION CREATORS     ------------------ */

let init   = users => ({ type: 'INITIALIZE_USERS', users })
let create = user  => ({ type: 'CREATE_USER', user })
let remove = id    => ({ type: 'REMOVE_USER', id })
let update = user  => ({ type: 'UPDATE_USER', user })

/* ------------       REDUCER     ------------------ */

export default function reducer (users = [], action) {
  switch (action.type) {
    
    case 'INITIALIZE_USERS': 
      return action.users

    case 'CREATE_USER':
      return [action.user, ...users]

    case 'REMOVE_USER':
      return users.filter(user => user.id !== action.id)

    
    case 'UPDATE_USER':
      return users.map(user => action.user.id === user.id ? action.user : user)

    default: 
      return users;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export let fetchUsers = () => dispatch => {
  axios.get('/api/users')
       .then(res => dispatch(init(res.data)));
}

// optimistic
export let removeUser = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/users/${id}`)
       .catch(err => console.error(`Removing user: ${id} unsuccesful`, err))
}

export let addUser = user => dispatch => {
  axios.post('/api/users', user)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating user: ${user} unsuccesful`, err))
}

export let updateUser = user => dispatch => {
    axios.put(`/api/users/${id}`, user)
         .then(res => dispatch(update(res.data)))
         .catch(err => console.error(`Creating user: ${user} unsuccesful`, err))
}