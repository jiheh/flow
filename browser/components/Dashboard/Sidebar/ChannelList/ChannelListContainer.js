import { connect } from 'react-redux';
import ChannelList from './ChannelList.jsx';

const mapStateToProps = ({channels}) => ({
  channels,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);