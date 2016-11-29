import { connect } from 'react-redux';
import SurveysComponent from './SurveysComponent';

import axios from 'axios';

const mapStateToProps = ({channels}) => ({
  currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
	submitSurvey: form => {
		axios.post('/api/survey', form)
		.catch(console.error);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveysComponent);
