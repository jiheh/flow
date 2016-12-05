import { connect } from 'react-redux';
import ChannelList from './ChannelList.jsx';
import axios from 'axios'
import persistState from 'redux-localstorage';
import { setCurrentChannel,receiveChannels } from '../../../../reducers/channels';

const mapStateToProps = ({channels}) => ({
  channels,
  currentChannelID: channels.currentChannel.id,
  currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
  setCurrentChannel: (channel) => {
    dispatch(setCurrentChannel(channel));
  },
  receiveChannels: () => {
    axios.get(`/api/channel/allChannels/`)
    .then(channels => {
       dispatch(receiveChannels(channels.data));
       if (channels.data.length) dispatch(setCurrentChannel(channels.data[0]));
    })
  }
});;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

