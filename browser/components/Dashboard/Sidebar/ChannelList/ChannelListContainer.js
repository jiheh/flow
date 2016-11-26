import { connect } from 'react-redux';
import ChannelList from './ChannelList.jsx';
import { setCurrentChannel } from '../../../../reducers/channels';

const mapStateToProps = ({channels}) => ({
  channels,
  currentChannelID: channels.currentChannel.id
});

const mapDispatchToProps = () => dispatch => ({
  setCurrentChannel: (channel) => {
    console.log('new channel:', channel.name);
    dispatch(setCurrentChannel(channel));
  },

});;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);