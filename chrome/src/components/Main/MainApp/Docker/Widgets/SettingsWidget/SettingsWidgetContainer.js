import { connect } from 'react-redux';
import SettingsWidgetComponent from './SettingsWidgetComponent.jsx';
import { logoutUser } from '../../../../../../reducers/user';
import { clearCurrentChannels } from '../../../../../../reducers/currentChannels';

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = () => dispatch => ({
  logout: () => {
    dispatch(logoutUser());
    dispatch(clearCurrentChannels());
  },
});

export default connect(null, mapDispatchToProps)(SettingsWidgetComponent);
