import { connect } from 'react-redux';
import { toggleSettingsPanel } from '../../../reducers/showSettingsPanel';
import ToggleSettingsPanel from './ToggleSettingsPanel.jsx';

const mapDispatchToProps = () => dispatch => ({
  toggle: () => {
    dispatch(toggleSettingsPanel());
  },
});

export default connect(null, mapDispatchToProps)(ToggleSettingsPanel);
