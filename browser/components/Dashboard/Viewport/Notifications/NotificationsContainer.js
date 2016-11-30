import { connect } from 'react-redux';
import axios from 'axios'
import Notifications from './Notifications.jsx';
import NotificationsComponent from './NotificationsComponent'
import { receiveNotifications } from '../../../../reducers/notifications' 

const mapStateToProps = ({notifications,channels}) => ({
  notifications: notifications,
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = () => dispatch => ({
	submitNotification: form => {
		axios.post('/api/announcements', form)
		.catch(console.error);
	},
  receiveNotifications: (channelId) =>{
		axios.get(`/api/announcements/allAnnouncements/${channelId}`)
		.then(announcements =>{
			dispatch(receiveNotifications(announcements.data))
		})
		.catch(err => console.error('Announcements for this channel can not be found',err))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
