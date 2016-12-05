import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import axios from 'axios';

import { login } from '../../reducers/auth';
import { receiveChannels } from  '../../reducers/channels';
import { isOrgHead } from '../../reducers/organizations';

import HomeLogin from './HomeLogin.jsx';

const mapDispatch = dispatch => ({
  loginAdmin: (admin) => {
    dispatch(login(admin));
    return dispatch(login(admin))
    .then(() => axios.get('/api/channel/allChannels/'))
    .then(channels => {
      return dispatch(receiveChannels(channels.data));
    })
    .then(() => {
      return axios.post('/api/organization/isOrgHead', { adminEmail: admin.email })
    })
    .then(res => {
      dispatch(isOrgHead(res.data));
      browserHistory.push('/dashboard');
    })
  },
});

export default connect(null, mapDispatch)(HomeLogin);
