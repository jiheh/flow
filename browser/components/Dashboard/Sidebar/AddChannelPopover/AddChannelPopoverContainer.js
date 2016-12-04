import { connect } from 'react-redux';
import axios from 'axios';
import { addChannel, setCurrentChannel } from '../../../../reducers/channels';
import AddChannelPopoverComponent from './AddChannelPopoverComponent.jsx';

const mapDispatch = () => dispatch => ({
  submitChannel: (channel) => {
    return axios.post('/api/channel', channel)
      .then(res => {
        console.log(res);
        dispatch(addChannel(res.data));
      });
  },
});

export default connect(null, mapDispatch)(AddChannelPopoverComponent);
