import axios from 'axios';

/* ------------   ACTION CREATORS     ------------------ */

const init = users => ({
  type: 'INITIALIZE_USERS',
  users,
});

const create = user => ({
  type: 'CREATE_USER',
  user,
});

const remove = id => ({
  type: 'REMOVE_USER',
  id,
});

const update = user => ({
  type: 'UPDATE_USER',
  user,
});

/* ------------       REDUCER     ------------------ */

export default function reducer(users = [], action) {
  switch (action.type) {
    case 'INITIALIZE_USERS':
      return action.users;

    case 'CREATE_USER':
      return [action.user, ...users];

    case 'REMOVE_USER':
      return users.filter(user => user.id !== action.id);

    case 'UPDATE_USER':
      return users.map(user => action.user.id === user.id ? action.user : user);

    default:
      return users;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => (dispatch) => {
  axios.get('/api/users')
    .then(res => dispatch(init(res.data)));
};

// optimistic
export const removeUser = id => (dispatch) => {
  dispatch(remove(id));
  axios.delete(`/api/users/${id}`)
    .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
};

export const addUser = user => (dispatch) => {
  axios.post('/api/users', user)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

export const updateUser = user => (dispatch) => {
  axios.put(`/api/users/${user.id}`, user)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};
