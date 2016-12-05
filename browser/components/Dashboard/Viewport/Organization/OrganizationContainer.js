import { connect } from 'react-redux';
import axios from 'axios'
import Organization from './Organization.jsx';
import OrganizationComponent from './OrganizationComponent'
// import { addNotificationToCurrent } from '../../../../reducers/channels';

const mapStateToProps = ({
  channels,
}) => ({
  organization: channels.currentChannel.Organization,
});

const mapDispatchToProps = () => dispatch => ({
	// submitNotification: form => {
	// 	return axios.post('/api/announcements/', form)
	// 	.then(announcement => {
	// 		dispatch(addNotificationToCurrent(announcement.data))
	// 	})
	// 	.catch(console.error);
	// }
});

export default connect(mapStateToProps, null)(OrganizationComponent);
