/* global chrome */

import { connect } from 'react-redux';
import axios from 'axios';

import { setUser } from '../../../reducers/user';
import { setSetting } from '../../../reducers/settings';

import Login from './LoginComponent.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  settings,
});

const mapDispatchToProps = () => dispatch => ({
  tryLogin: (name, email, password) => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/users', { name, email, password })
      .then((res) => {
        const hash = res.data;
        const user = { name, hash };
        dispatch(setUser(user));
      })
    // TODO: error handling for failed login
      .catch(console.error);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
