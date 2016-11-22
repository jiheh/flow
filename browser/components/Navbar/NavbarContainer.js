import { connect } from 'react-redux';
import { login, logout } from '../../reducers/auth';
import { browserHistory } from 'react-router';
import Navigation from './Navbar';


const mapStateToProps = ({ currentAdmin }) => ({ currentAdmin });

const mapDispatchToProps = dispatch => ({
	loginAdmin: (admin) => {
		dispatch(login(admin));
	},
  logoutAdmin: () => {
    dispatch(logout())
    browserHistory.push('/');
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);