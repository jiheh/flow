import { connect } from 'react-redux';
import SettingsPanelComponent from './SettingsPanelComponent.jsx';
import { setSettings } from '../../../../reducers/settings';

const mapStateToProps = ({ settings }) => ({
  settings,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanelComponent);
