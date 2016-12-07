import { connect } from 'react-redux';
import Settings from './Settings.jsx';
import { setSettings } from '../../../../reducers/settings';
import { switchAudioOn } from '../../../../reducers/playAudio';


const mapStateToProps = ({
  settings,
  playAudio,
 }) => ({
  settings,
  playAudio,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  turnAudioOn: (bool) => {
    dispatch(switchAudioOn(bool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
