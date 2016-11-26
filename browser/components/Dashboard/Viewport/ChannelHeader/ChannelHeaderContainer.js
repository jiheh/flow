import { connect } from 'react-redux';
import ChannelHeader from './ChannelHeader.jsx';

const mapStateToProps = ({channels}) => ({
  currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
});;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader);