/* global chrome */
import { connect } from 'react-redux';
import MainApp from './MainApp.jsx';
import { setSettings } from '../../../reducers/settings';
import { logoutUser } from '../../../reducers/user';

const mapStateToProps = ({
  showSettingsPanel,
}) => ({
  showSettingsPanel,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  logout: () => {
    chrome.storage.sync.set({ user: { name: '', hash: '' } }, () => {
      dispatch(logoutUser());
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
