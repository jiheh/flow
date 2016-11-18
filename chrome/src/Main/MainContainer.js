import { connect } from 'react-redux';
import axios from 'axios';
import { setImageUrl } from '../reducers/backgroundImage';
import { setVideoUrl } from '../reducers/backgroundVideo';
import MainComponent from './MainComponent.jsx';
import { setSettings } from '../reducers/settings';

const imageSubreddits = [
  'earthporn',
  'botanicalporn',
  'waterporn',
  'seaporn',
  'skyporn',
  'desertporn',
  'winterporn',
  'autumnporn',
  'weatherporn',
  'geologyporn',
  'spaceporn',
  'beachporn',
  'mushroomporn',
  'summerporn',
  'lavaporn',
  'lakeporn',
  'cityporn',
  'villageporn',
  'ruralporn',
  'boatporn',
  'ridesporn',
  'spaceflightporn',
  'roadporn',
  'animalporn',
  'agricultureporn',
  'fractalporn',
  'aerialporn',
  'viewporn',
];

const mapStateToProps = ({
  backgroundImage,
  backgroundVideo,
  settings,
  showSettingsPanel,
}) => ({
  backgroundImage,
  backgroundVideo,
  settings,
  showSettingsPanel,
});

const mapDispatchToProps = () => dispatch => ({
  getBackgroundImage: () => {
    const subreddit = imageSubreddits[Math.floor(Math.random() * imageSubreddits.length)];

    axios.get(`https://www.reddit.com/r/${subreddit}/random/.json`)
      .then(({ data }) => {
        let result = `${data[0].data.children[0].data.url}`;
        if (result.includes('imgur')) { result += '.jpg'; }

        // fix for bugged HTML-escaping of ampersands in i.reddituploads.com urls from reddit API
        if (result.includes('i.reddituploads.com')) { result = result.replace(/amp;/g, ''); }
        dispatch(setImageUrl(result));
      })
      // TODO: error handling
      .catch(console.error);
  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  getBackgroundVideo: () => {
    const videoUrl = '../../assets/videos/1.mp4';
    dispatch(setVideoUrl(videoUrl));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
