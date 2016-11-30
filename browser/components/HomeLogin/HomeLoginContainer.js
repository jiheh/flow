import { connect } from 'react-redux';
import { login } from '../../reducers/auth';
import HomeLogin from './HomeLogin.jsx';
import axios from 'axios';
import { receiveChannels } from  '../../reducers/channels';
import { browserHistory } from 'react-router';

const mapDispatch = dispatch => ({
  loginAdmin: (admin) => {
    dispatch(login(admin));
    return dispatch(login(admin))
      .then(() => axios.get('/api/channel/allChannels/'))
      .then(channels => {
        dispatch(receiveChannels(channels.data));
        browserHistory.push('/dashboard');
      })
  },
});

export default connect(null, mapDispatch)(HomeLogin);
