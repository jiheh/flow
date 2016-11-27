/* global chrome */
import { connect } from 'react-redux';
import MainApp from './MainAppComponent.jsx';
import { setSettings } from '../../../reducers/settings';
import { receiveAnnouncements } from '../../../reducers/announcements';
import { receiveSurveys } from '../../../reducers/surveys';
import store from '../../../store';
import axios from 'axios';

const mapStateToProps = ({
  showSettingsPanel,
}) => ({
  showSettingsPanel,
});

const mapDispatchToProps = () => dispatch => ({
  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  getAnnouncements: () => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/announcements/chrome', { hash: store.getState().user.hash })
      .then(res => dispatch(receiveAnnouncements(res.data)))
      .catch(console.error); // TODO: error handling
  },

  getSurveys: () => {
    // TODO: change to productino server url
    axios.post('http://localhost:8080/api/surveys/chrome', { hash: store.getState().user.hash })
      .then(res => dispatch(receiveSurveys(res.data)))
      .catch(console.error); // TODO: error handling;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
