import { connect } from 'react-redux';
import Background from './Background.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  showVideo: settings.showVideo,
  playAudio: settings.playAudio,
});

export default connect(mapStateToProps, null)(Background);
