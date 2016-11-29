import { connect } from 'react-redux';
import ChannelsWidgetComponent from './ChannelsWidgetComponent.jsx';
import { receiveInvites } from '../../../../../../reducers/invites';
import store from '../../../../../../store';
import axios from 'axios';

const mapStateToProps = ({
  invites,
}) => ({
  invites,
});

const mapDispatchToProps = () => dispatch => ({
    acceptAndDeleteInvite: (invite) => {
      // TODO: change to production server url
      axios.post('http://localhost:8080/api/invites/chrome/delete', { invite: invite })
        .then(res => dispatch(receiveInvites(res.data)))
        .catch(console.error); // TODO: error handling
    },
});

export default connect(null, mapDispatchToProps)(ChannelsWidgetComponent);
