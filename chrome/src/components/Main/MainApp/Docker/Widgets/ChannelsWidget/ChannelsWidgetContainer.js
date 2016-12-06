import { connect } from 'react-redux';
import ChannelsWidgetComponent from './ChannelsWidgetComponent.jsx';
import { receiveInvites } from '../../../../../../reducers/invites';
import { updateCurrentChannels } from '../../../../../../reducers/currentChannels';
import store from '../../../../../../store';
import axios from 'axios';
import server from '../../../../../../server.js';

const mapStateToProps = ({
  invites,
  currentChannels,
}) => ({
  invites,
  currentChannels,
});

const mapDispatchToProps = () => dispatch => ({
    acceptAndDeleteInvite: (invite) => {
      axios.post(`${server}api/invites/chrome/delete`, { invite: invite })
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
        dispatch(updateCurrentChannels([...currentChannels, [invite.channelName, invite.channelId]]));
      }
    },

    leaveChannel: (channelId) => {
      axios.post(`${server}api/channel/chrome/removeUser`, {
        channelId: channelId,
        hash: store.getState().user.hash,
      })
      .then(res => {
        dispatch(updateCurrentChannels(res.data))
      })
      .catch(console.error); // TODO: error handling
    }
});

export default connect(null, mapDispatchToProps)(ChannelsWidgetComponent);
