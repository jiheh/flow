import { connect } from 'react-redux';
import axios from 'axios';
import { setImageUrl } from '../reducers/backgroundImage';
import MainComponent from './MainComponent.jsx';

const mapStateToProps = ({ backgroundImage }) => ({
  backgroundImage,
});

const mapDispatchToProps = () => dispatch => ({
  getBackgroundImage: () => {
    axios.get('https://www.reddit.com/r/earthporn/random/.json')
      .then(({ data }) => {
        let result = `${data[0].data.children[0].data.url}`;
        if(result.includes('imgur')) { result += '.jpg'; }
        dispatch(setImageUrl(result));
      })
      .catch(console.error);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
