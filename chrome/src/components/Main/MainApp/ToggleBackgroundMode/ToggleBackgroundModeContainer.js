import { connect } from 'react-redux';
import ToggleBackgroundModeComponent from './ToggleBackgroundModeComponent.jsx';

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps, null)(ToggleBackgroundModeComponent);
