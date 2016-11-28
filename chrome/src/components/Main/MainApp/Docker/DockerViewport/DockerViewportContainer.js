import { connect } from 'react-redux';
import DockerViewport from './DockerViewport.jsx';
// import { } from '../../../../reducers/settings';

const mapStateToProps = ({
  docker,
  invites,
 }) => ({
  activeWidget: docker.activeWidget,
  invites,
});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DockerViewport);
