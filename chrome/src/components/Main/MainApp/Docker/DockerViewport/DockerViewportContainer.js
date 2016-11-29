import { connect } from 'react-redux';
import DockerViewport from './DockerViewport.jsx';
// import { } from '../../../../reducers/settings';

const mapStateToProps = ({
  docker,
  invites,
  currentChannels,
 }) => ({
  activeWidget: docker.activeWidget,
  invites,
  currentChannels,
});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DockerViewport);
