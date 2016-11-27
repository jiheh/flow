import { connect } from 'react-redux';
import SettingsWidgetComponent from './SettingsWidgetComponent.jsx';
import { logoutUser } from '../../../../../../reducers/user';

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = () => dispatch => ({
  logout: () => {
    dispatch(logoutUser());
  },
});

export default connect(null, mapDispatchToProps)(SettingsWidgetComponent);
