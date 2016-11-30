import { connect } from 'react-redux';
import { login } from '../../reducers/auth';
import HomeLogin from './HomeLogin.jsx';

const mapDispatch = dispatch => ({
  loginAdmin: (admin) => {
    dispatch(login(admin));
  },
});

export default connect(null, mapDispatch)(HomeLogin);
