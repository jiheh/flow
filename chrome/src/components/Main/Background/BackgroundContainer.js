import { connect } from 'react-redux';
import Background from './Background.jsx';

const mapStateToProps = ({
  settings,
  playAudio,
}) => ({
  showVideo: settings.showVideo,
  playAudio,
});

export default connect(mapStateToProps, null)(Background);
