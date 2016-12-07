import { connect } from 'react-redux';
import AnnouncementWidgetComponent from './AnnouncementWidgetComponent.jsx';
import { receiveAnnouncements } from '../../../../../../reducers/announcements';
import store from '../../../../../../store';
import axios from 'axios';
import server from '../../../../../../server.js';

const mapStateToProps = ({
  announcements,
}) => ({
  announcements,
  unread: [] // announcements.unread,
});

const mapDispatchToProps = () => dispatch => ({
  getAnnouncements: () => {
    axios.post(`${server}api/announcements/chrome`, { hash: store.getState().user.hash })
      .then(res => dispatch(receiveAnnouncements(res.data.reverse())))
      .catch(console.error); // TODO: error handling
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementWidgetComponent);
