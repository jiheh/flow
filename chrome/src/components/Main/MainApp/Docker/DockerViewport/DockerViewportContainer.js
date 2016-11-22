import { connect } from 'react-redux';
import DockerViewport from './DockerViewport.jsx';
// import { } from '../../../../reducers/settings';

const mapStateToProps = ({ docker }) => ({
  activeWidget: docker.activeWidget,
});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DockerViewport);
