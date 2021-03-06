/* global chrome */

import { connect } from 'react-redux';
import axios from 'axios';
import server from '../../../server.js';

import { setUser } from '../../../reducers/user';

import Login from './LoginComponent.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  settings,
});

const mapDispatchToProps = () => dispatch => ({
  tryLogin: (name, email, password) => {
    return axios.post(`${server}api/users`, { name, email, password })
      .then((res) => {
        const hash = res.data;
        const user = { name, hash };
        dispatch(setUser(user));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
