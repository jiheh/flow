import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent.jsx';

const mapStateToProps = ({ channels }) => ({
  allChannels: channels.allChannels,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
