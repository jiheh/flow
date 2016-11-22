import { connect } from 'react-redux';
import MainComponent from './MainComponent.jsx';
import { setSettings } from '../../reducers/settings';

const mapStateToProps = ({
  settings,
  showSettingsPanel,
}) => ({
  settings,
  showSettingsPanel,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
