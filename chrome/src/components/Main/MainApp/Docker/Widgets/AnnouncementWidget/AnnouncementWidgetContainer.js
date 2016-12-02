import { connect } from 'react-redux';
import AnnouncementWidgetComponent from './AnnouncementWidgetComponent.jsx';
import { receiveAnnouncements } from '../../../../../../reducers/announcements';
import store from '../../../../../../store';
import axios from 'axios';

const mapStateToProps = ({
  announcements,
}) => ({
  announcements,
  unread: [] // announcements.unread,
});

const mapDispatchToProps = () => dispatch => ({
  getAnnouncements: () => {
    // TODO: change to production server url
    axios.post('http://localhost:8080/api/announcements/chrome', { hash: store.getState().user.hash })
      .then(res => dispatch(receiveAnnouncements(res.data.reverse())))
      .catch(console.error); // TODO: error handling
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementWidgetComponent);
