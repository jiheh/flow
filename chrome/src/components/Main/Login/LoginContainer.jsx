import { connect } from 'react-redux';
import axios from 'axios';

import { setUser } from '../../../reducers/user';

import Login from './LoginComponent.jsx';

const mapDispatchToProps = () => dispatch => ({
  tryLogin: (name, email, password) => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/users', { name, email, password })
      .then(res => {
        const hash = res.data;
        dispatch(setUser({ name, hash }));
      })
    // TODO: error handling for failed login
      .catch(console.error);
  },
});

export default connect(null, mapDispatchToProps)(Login);
