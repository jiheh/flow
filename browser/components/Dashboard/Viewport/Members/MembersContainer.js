import { connect } from 'react-redux';
import MembersComponent from './MembersComponent';

import axios from 'axios';

const mapStateToProps = ({channels}) => ({
	currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
	submitInvite: form => {
		axios.post('/api/invites/webapp', form)
		.catch(err => console.error('Member could not be added', err));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersComponent);
