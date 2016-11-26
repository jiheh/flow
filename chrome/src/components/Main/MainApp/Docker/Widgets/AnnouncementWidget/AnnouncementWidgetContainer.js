import { connect } from 'react-redux';
import AnnouncementWidgetComponent from './AnnouncementWidgetComponent.jsx';

const mapStateToProps = ({
  announcements,
}) => ({
  announcements,
  unread: [] // announcements.unread,
});

// const mapDispatchToProps = ({

// }) => ({

// });

export default connect(mapStateToProps, null)(AnnouncementWidgetComponent);
