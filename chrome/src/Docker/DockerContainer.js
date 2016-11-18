import { connect } from 'react-redux';
import Docker from './Docker.jsx';
import { toggleMeditationVisible } from '../reducers/meditationWidget';


let mapStateToProps = ({
  meditationWidget,
}) => ({
  meditationWidget,
});

let mapDispatchToProps = () => dispatch => ({
  toggleMeditationVisibility: () => {
    dispatch(toggleMeditationVisible());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Docker);
