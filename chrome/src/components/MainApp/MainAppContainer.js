import { connect } from 'react-redux';
import MainApp from './MainApp.jsx';
import { setSettings } from '../../reducers/settings';

const mapStateToProps = ({
  showSettingsPanel,
}) => ({
  showSettingsPanel,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
