import { connect } from 'react-redux';
import ChannelsWidgetComponent from './ChannelsWidgetComponent.jsx';
import { receiveInvites } from '../../../../../../reducers/invites';
import { updateCurrentChannels } from '../../../../../../reducers/currentChannels';
import store from '../../../../../../store';
import axios from 'axios';

const mapStateToProps = ({
  invites,
  currentChannels,
}) => ({
  invites,
  currentChannels,
});

const mapDispatchToProps = () => dispatch => ({
    acceptAndDeleteInvite: (invite) => {
      // TODO: change to production server url
      axios.post('http://localhost:8080/api/invites/chrome/delete', { invite: invite })
        .then(res => {
          dispatch(receiveInvites([...res.data]))
        })
        .catch(console.error); // TODO: error handling
    },

    showNewChannels: (currentChannels, invite) => {
      // currentChannels.push(invite.channelName);
      if (currentChannels.includes(invite.channelName)) {
        dispatch(updateCurrentChannels(currentChannels));
      } else {
        dispatch(updateCurrentChannels([...currentChannels, invite.channelName]));
      }
    },
});

export default connect(null, mapDispatchToProps)(ChannelsWidgetComponent);
