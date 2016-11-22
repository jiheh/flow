import { connect } from 'react-redux';
import AnnouncementWidgetComponent from './AnnouncementWidgetComponent.jsx';

const mapStateToProps = ({
  announcements
}) => ({
  allAnnouncements: announcements.allAnnouncements,
  unread: announcements.unread,
});

const mapDispatchToProps = ({

}) => ({

});

export default connect(mapStateToProps, null)(AnnouncementWidgetComponent);
