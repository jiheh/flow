import { connect } from 'react-redux';
import SurveyComponent from './SurveyComponent.jsx';
import axios from 'axios';

const mapDispatch = () => dispatch => ({
  fetchSurvey: surveyId => {
    return axios.get(`/api/survey/survey/${surveyId}`);
  }
})
export default connect(null, mapDispatch)(SurveyComponent);
