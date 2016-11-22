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


const mapDispatchToProps = () => dispatch => ({
  getBackgroundImage: () => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get('http://localhost:8080/api/images/random')
      .then(res => dispatch(setImageUrl(res.data)))
    // TODO: error handling
      .catch(console.error);
  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  getBackgroundVideo: () => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get('http://localhost:8080/api/videos/random')
      .then(res => dispatch(setVideoUrl(res.data)))
    // TODO: error handling
      .catch(console.error);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundComponent);
