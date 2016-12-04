import { connect } from 'react-redux';
import { set } from '../../reducers/auth';
import { browserHistory } from 'react-router';
import axios from 'axios';

import HomeSignUp from './HomeSignUp.jsx';

const mapDispatchSignup = () => dispatch => ({ 
	createOrg: credentials => {
		console.log('THIS IS IN THE CONTAINER')
	  return axios.post('/api/organization/', credentials)
	  .then(headAdmin =>{
	    return headAdmin
	  })
	  .then(res => dispatch(set(res.data)))
	  .catch(err => console.error('Signup unsuccessful', err));
	}
})

export default connect(null, mapDispatchSignup)(HomeSignUp);