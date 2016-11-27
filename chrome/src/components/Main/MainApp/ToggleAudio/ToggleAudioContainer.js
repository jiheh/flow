import { connect } from 'react-redux';
import ToggleAudioComponent from './ToggleAudioComponent.jsx';

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps, null)(ToggleAudioComponent);
