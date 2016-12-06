/* global chrome */
import { connect } from 'react-redux';
import MainApp from './MainAppComponent.jsx';
import { receiveSurveys } from '../../../reducers/surveys';
import { receiveInvites } from '../../../reducers/invites';
import { updateCurrentChannels } from '../../../reducers/currentChannels';
import store from '../../../store';
import axios from 'axios';
import server from '../../../server.js';

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
    axios.post(`${server}api/survey/chrome`, { hash: store.getState().user.hash })
      .then(res => dispatch(receiveSurveys(res.data)))
      .catch(console.error); // TODO: error handling;
  },

  getInvites: () => {
    axios.post(`${server}api/invites/chrome/get`, { hash: store.getState().user.hash })
      .then(res => dispatch(receiveInvites(res.data)))
      .catch(console.error); // TODO: error handling;
  },

  getChannels: () => {
    axios.post(`${server}api/channel/chrome/allChannels`, { hash: store.getState().user.hash })
      .then(res => dispatch(updateCurrentChannels(res.data)))
      .catch(console.error); // TODO: error handling;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
