import { connect } from 'react-redux';
import AdminsComponent from './AdminsComponent';
import { receiveAdmins, addAdminToCurrent } from '../../../../reducers/channels'
import axios from 'axios';



const mapStateToProps = ({
	channels,
	isOrgHead,
}) => ({
	currentChannel: channels.currentChannel,
	isOrgHead,
});

const mapDispatchToProps = () => dispatch => ({
	submitInvite: form => {
		return axios.post('/api/invites/addAdmin', form)
		.then(admin => {
			dispatch(addAdminToCurrent(admin.data))
		})
		.catch(err => console.error('Admin could not be added to the channel', err))
	},
	receiveAdmins: (channelId) =>{
		return axios.get(`/api/users/allAdmins/${channelId}`)
		.then(res =>{
			dispatch(receiveAdmins(res.data))
		})
		.catch(err => console.error('Admins for this channel can not be found', err))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminsComponent);
