import { connect } from 'react-redux';
import MainComponent from './MainComponent.jsx';
import { setSettings } from '../../reducers/settings';
import { setUser as setUserAction } from '../../reducers/user';

const mapStateToProps = ({
  settings,
  showSettingsPanel,
  user,
}) => ({
  settings,
  showSettingsPanel,
  user,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  setUser: (user) => {
    dispatch(setUserAction(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
