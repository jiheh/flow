import { connect } from 'react-redux';
import axios from 'axios'
import Notifications from './Notifications.jsx';
import NotificationsComponent from './NotificationsComponent'


const mapStateToProps = ({notifications,channels}) => ({
  notifications: notifications,
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = () => dispatch => ({
	submitNotification: form => {
		axios.post('/api/announcements/', form)
		.catch(console.error);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
