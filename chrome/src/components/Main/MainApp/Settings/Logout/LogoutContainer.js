import { connect } from 'react-redux';

import Logout from './Logout.jsx';
import { logoutUser } from '../../../../../reducers/user';
import { clearCurrentChannels } from '../../../../../reducers/currentChannels';

const mapStateToProps = null;

const mapDispatchToProps = () => dispatch => ({
  logout: () => {
    dispatch(logoutUser());
    dispatch(clearCurrentChannels());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
