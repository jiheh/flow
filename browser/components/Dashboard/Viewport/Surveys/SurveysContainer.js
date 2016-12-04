import { connect } from 'react-redux';
import SurveysComponent from './SurveysComponent.jsx';
import { addSurveyToCurrent } from '../../../../reducers/channels';

import axios from 'axios';

const mapStateToProps = ({channels}) => ({
  currentChannel: channels.currentChannel,
});

const mapDispatchToProps = () => dispatch => ({
	submitSurvey: form => {
		return axios.post('/api/survey', form)
      .then(survey => {
        // console.log('posted survey: ');
        // console.log(survey);
        dispatch(addSurveyToCurrent(survey.data));
      })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveysComponent);
