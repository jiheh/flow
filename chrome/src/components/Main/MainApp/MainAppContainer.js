/* global chrome */
import { connect } from 'react-redux';
import MainApp from './MainAppComponent.jsx';
import { receiveSurveys } from '../../../reducers/surveys';
import { receiveInvites } from '../../../reducers/invites';
import { updateCurrentChannels } from '../../../reducers/currentChannels';
import store from '../../../store';
import axios from 'axios';

const mapStateToProps = ({
  showSettingsPanel,
  invites,
  currentChannels,
}) => ({
  showSettingsPanel,
  invites,
  currentChannels,
});

const mapDispatchToProps = () => dispatch => ({

  getSurveys: () => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/survey/chrome', { hash: store.getState().user.hash })
      .then(res => dispatch(receiveSurveys(res.data)))
      .catch(console.error); // TODO: error handling;
  },

  getInvites: () => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/invites/chrome/get', { hash: store.getState().user.hash })
      .then(res => dispatch(receiveInvites(res.data)))
      .catch(console.error); // TODO: error handling;
  },

  getChannels: () => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/channel/chrome/allChannels', { hash: store.getState().user.hash })
      .then(res => dispatch(updateCurrentChannels(res.data)))
      .catch(console.error); // TODO: error handling;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
