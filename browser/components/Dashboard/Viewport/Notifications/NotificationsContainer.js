import { connect } from 'react-redux';
import axios from 'axios'
import Notifications from './Notifications.jsx';
import NotificationsComponent from './NotificationsComponent.jsx'
import { addNotificationToCurrent } from '../../../../reducers/channels';

const mapStateToProps = ({notifications,channels}) => ({
  notifications: notifications,
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = () => dispatch => ({
	submitNotification: form => {
		return axios.post('/api/announcements/', form)
		.then(announcement => {
			dispatch(addNotificationToCurrent(announcement.data))
		})
		.catch(console.error);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
