import { connect } from 'react-redux';
import { setAdmin } from '../../reducers/auth';

import axios from 'axios';

import HomeSignUp from './HomeSignUp.jsx';

const mapDispatchSignup = () => dispatch => ({ 
	createOrg: credentials => {
		console.log('THIS IS IN THE CONTAINER')
	  return axios.post('/api/organization/', credentials)
	  .then(headAdmin =>{
	    return headAdmin
	  })
	  .then(res => dispatch(setAdmin(res.data)))
	  .catch(err => console.error('Signup unsuccessful', err));
	}
})

export default connect(null, mapDispatchSignup)(HomeSignUp);