import { connect } from 'react-redux';
import MainComponent from './MainComponent.jsx';
import { setUser as setUserAction } from '../../reducers/user';

const mapStateToProps = ({
  showSettingsPanel,
  user,
}) => ({
  showSettingsPanel,
  user,
});

const mapDispatchToProps = () => dispatch => ({
  setUser: (user) => {
    dispatch(setUserAction(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
