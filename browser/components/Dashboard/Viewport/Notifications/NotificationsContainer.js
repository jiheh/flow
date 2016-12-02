import { connect } from 'react-redux';
import axios from 'axios'
import Notifications from './Notifications.jsx';
import NotificationsComponent from './NotificationsComponent'
import { addNotificationToCurrent } from '../../../../reducers/channels';

const mapStateToProps = ({notifications,channels}) => ({
  notifications: notifications,
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = () => dispatch => ({
	submitNotification: form => {
		return axios.post('/api/announcements/', form)
		.then(announcement => {
			console.log('in here',announcement)
			dispatch(addNotificationToCurrent(announcement.data))
		})
		.catch(console.error);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
