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
  recieveChannels: () =>{
    let adminId = 1
    //adminId = JSON.parse(localstorage).currentAdmin.id
    axios.get(`/api/channel/allChannels/${adminId}`)
    .then(channels =>{
      console.log(channels)
      dispatch(receiveChannels(channels.data))
    })
  }
});;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

