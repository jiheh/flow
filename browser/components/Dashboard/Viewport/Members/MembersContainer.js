import { connect } from 'react-redux';
import MembersComponent from './MembersComponent';
import { receiveUsers } from '../../../../reducers/channels'
import axios from 'axios';



const mapStateToProps = ({channels}) => ({
	currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
	submitInvite: form => {
		axios.post('/api/invites/webapp', form)
		.catch(err => console.error('Member could not be added', err));
	},
	receiveUsers: (channelId) =>{
		axios.get(`/api/users/allUsers/${channelId}`)
		.then(users =>{
			dispatch(receiveUsers(users.data))
		})
		.catch(err => console.error('Users for this channel can not be found',err))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersComponent);
