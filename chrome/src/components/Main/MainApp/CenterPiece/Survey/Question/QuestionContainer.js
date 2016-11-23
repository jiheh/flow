import { connect } from 'react-redux';
import axios from 'axios';
import { setSurveyQuestions } from '../../../../../../reducers/surveyQuestions';

import QuestionComponent from  './QuestionComponent.jsx';

const mapStateToProps = ({
  surveyQuestions,
}) => ({
  surveyQuestions,
});


const mapDispatchToProps = () => dispatch => ({
  setQuestion: (randQuestion) => {
    dispatch(setSurveyQuestions(randQuestion))
  }

  // saveSettings: (settings) => {
  //   dispatch(setSettings(settings));
  // },

});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
