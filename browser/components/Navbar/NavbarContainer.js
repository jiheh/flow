import { connect } from 'react-redux';
import { logout } from '../../reducers/auth';
import { browserHistory } from 'react-router';
import Navigation from './Navbar';


const mapStateToProps = ({ currentUser }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({ 
  logoutAdmin: () => {
    dispatch(logout())
    browserHistory.push('/');
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);