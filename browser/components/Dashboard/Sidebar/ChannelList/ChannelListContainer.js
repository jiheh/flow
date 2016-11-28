import { connect } from 'react-redux';
import ChannelList from './ChannelList.jsx';
import axios from 'axios'
import persistState from 'redux-localstorage';
import { setCurrentChannel,receiveChannels } from '../../../../reducers/channels';

const mapStateToProps = ({channels}) => ({
  channels,
  currentChannelID: channels.currentChannel.id
});

const mapDispatchToProps = () => dispatch => ({
  setCurrentChannel: (channel) => {
    dispatch(setCurrentChannel(channel));
  },
  recieveChannels: () => {
    axios.get(`/api/channel/allChannels/`)
    .then(channels => {
      dispatch(receiveChannels(channels.data))
    })
  }
});;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

