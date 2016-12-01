import { connect } from 'react-redux';
import TrackComponent from './TrackComponent';

const mapStateToProps = ({

}) => ({
  playing: false,
  currentTrack: null,
});

// const mapDispatchToProps = ({

// }) => ({

// });

export default connect(mapStateToProps, null)(TrackComponent);
