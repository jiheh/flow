import { connect } from 'react-redux';
import axios from 'axios';
import { setImageUrl } from '../../../reducers/backgroundImage';
import { setVideoUrl } from '../../../reducers/backgroundVideo';
import BackgroundComponent from './BackgroundComponent.jsx';

const mapStateToProps = ({
  backgroundImage,
  backgroundVideo,
  settings,
}) => ({
  backgroundImage,
  backgroundVideo,
  showVideo: settings.showVideo,
});

export default connect(mapStateToProps, null)(BackgroundComponent);
