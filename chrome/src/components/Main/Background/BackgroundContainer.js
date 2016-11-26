import { connect } from 'react-redux';
import Background from './Background.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  showVideo: settings.showVideo,
});

export default connect(mapStateToProps, null)(Background);
