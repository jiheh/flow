import { connect } from 'react-redux';
import { login, logout } from '../../reducers/auth';
import { setCurrentChannel, receiveChannels } from '../../reducers/channels';
import { browserHistory } from 'react-router';
import Navigation from './Navbar.jsx';
import store from '../../store';
import axios from 'axios';


const mapStateToProps = ({
	currentAdmin,
	isOrgHead,
 }) => ({
	currentAdmin,
	isOrgHead,
});

const mapDispatchToProps = dispatch => ({
	loginAdmin: (admin) => {
		dispatch(login(admin));
	},

  logoutAdmin: () => {
    dispatch(logout());
    dispatch(setCurrentChannel({}));
    dispatch(receiveChannels([]));
    browserHistory.push('/');
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
