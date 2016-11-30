import { connect } from 'react-redux';
import Viewport from './Viewport.jsx';

const mapStateToProps = ({ channels }) => ({
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
