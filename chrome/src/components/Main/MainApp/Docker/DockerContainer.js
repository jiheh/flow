import { connect } from 'react-redux';
import Docker from './Docker.jsx';
import { toggleDockerViewport } from '../../../../reducers/docker';


const mapStateToProps = ({
  docker,
  invites,
  currentChannels,
}) => ({
  viewportVisible: docker.viewportVisible,
  activeWidget: docker.activeWidget,
  invites,
  currentChannels,
});

const mapDispatchToProps = () => dispatch => ({
  toggleDockerViewport: (widgetNameString) => {
    dispatch(toggleDockerViewport(widgetNameString));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Docker);
