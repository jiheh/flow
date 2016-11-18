import { connect } from 'react-redux';
import { setSettings } from '../reducers/settings';
import SettingsPanelComponent from './SettingsPanelComponent.jsx';

const mapStateToProps = ({ settings }) => ({
  settings,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanelComponent);
