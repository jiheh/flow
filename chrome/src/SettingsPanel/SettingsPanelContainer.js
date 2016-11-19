import { connect } from 'react-redux';
import SettingsPanelComponent from './SettingsPanelComponent.jsx';

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps, null)(SettingsPanelComponent);
