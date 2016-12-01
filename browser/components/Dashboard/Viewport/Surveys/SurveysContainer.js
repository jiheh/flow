import { connect } from 'react-redux';
import SurveysComponent from './SurveysComponent';
import { addSurveyToCurrent } from '../../../../reducers/channels';

import axios from 'axios';

const mapStateToProps = ({channels}) => ({
  currentChannel: channels.currentChannel
});

const mapDispatchToProps = () => dispatch => ({
	submitSurvey: form => {
		axios.post('/api/survey', form)
      .then(survey => {
        // console.log('posted survey: ');
        // console.log(survey);
        dispatch(addSurveyToCurrent(survey.data));
        window.location.reload();
      })
		.catch(console.error);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveysComponent);
