import { connect } from 'react-redux';
import Docker from './Docker.jsx';
import { toggleMeditationVisible } from '../../../../reducers/meditationWidget';


const mapStateToProps = ({
  meditationWidget,
}) => ({
  meditationWidget,
});

const mapDispatchToProps = () => dispatch => ({
  toggleMeditationVisibility: () => {
    dispatch(toggleMeditationVisible());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Docker);
