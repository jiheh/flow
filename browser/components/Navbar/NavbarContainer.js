import { connect } from 'react-redux';
import { login, logout } from '../../reducers/auth';
import { browserHistory } from 'react-router';
import Navigation from './Navbar';


const mapStateToProps = ({ organization }) => ({ organization });

const mapDispatchToProps = dispatch => ({
	loginAdmin: () => {
		dispatch(login());
	},
  logoutAdmin: () => {
    dispatch(logout())
    browserHistory.push('/');
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);