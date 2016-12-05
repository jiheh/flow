import { connect } from 'react-redux';

import Logout from './LogoutIcon.jsx';
import { logoutUser } from '../../../../../reducers/user';
import { clearCurrentChannels } from '../../../../../reducers/currentChannels';

const mapStateToProps = () => (state, ownProps) => ({
	settings: ownProps.settings,	
})

const mapDispatchToProps = () => dispatch => ({
  logout: () => {
    dispatch(logoutUser());
    dispatch(clearCurrentChannels());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
