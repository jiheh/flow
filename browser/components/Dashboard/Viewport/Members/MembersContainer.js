import { connect } from 'react-redux';
import MembersComponent from './MembersComponent';
import { receiveUsers } from '../../../../reducers/channels'
import axios from 'axios';



const mapStateToProps = ({channels}) => ({
	currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
	submitInvite: form => {
		return axios.post('/api/invites/webapp', form)
	},
	receiveUsers: (channelId) =>{
		return axios.get(`/api/users/allUsers/${channelId}`)
		.then(users =>{
			dispatch(receiveUsers(users.data))
		})
		.catch(err => console.error('Users for this channel can not be found',err))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersComponent);
