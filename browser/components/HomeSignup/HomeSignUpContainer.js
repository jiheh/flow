import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import axios from 'axios';

import { login } from '../../reducers/auth';
import { receiveChannels } from  '../../reducers/channels';

import HomeSignUp from './HomeSignUp.jsx';

const mapDispatchSignup = () => dispatch => ({ 
	createOrg: credentials => {
		axios.post('/api/organization/', credentials)
  	.then(() => (
  		dispatch(login({
  			email: credentials.email,
  			password: credentials.password
  		}))
  	))
  	.then(() => axios.get('/api/channel/allChannels/'))
    .then(channels => {
      dispatch(receiveChannels(channels.data));
      browserHistory.push('/dashboard');
  	})
	  .catch(err => console.error('Signup unsuccessful', err));
	}
})

export default connect(null, mapDispatchSignup)(HomeSignUp);