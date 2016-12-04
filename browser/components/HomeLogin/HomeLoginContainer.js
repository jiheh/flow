import { connect } from 'react-redux';
import { login } from '../../reducers/auth';
import HomeLogin from './HomeLogin.jsx';
import axios from 'axios';
import { receiveChannels } from  '../../reducers/channels';
import { browserHistory } from 'react-router';
import { isOrgHead } from '../../reducers/organizations';

const mapDispatch = dispatch => ({
  loginAdmin: (admin) => {
    dispatch(login(admin));
    return dispatch(login(admin))
      .then(() => axios.get('/api/channel/allChannels/'))
      .then(channels => {
        return dispatch(receiveChannels(channels.data));
      })
      .then(() => {
        axios.post('/api/organization/isOrgHead', { adminEmail: admin.email })
          .then(res => {
            console.log("res.data: ", res.data)
            dispatch(isOrgHead(res.data));
            browserHistory.push('/dashboard');
            // return res.data;
          })
          .catch(console.error); // TODO: error handling;
      })
  },
});

export default connect(null, mapDispatch)(HomeLogin);
