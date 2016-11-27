import React, { PropTypes } from 'react';
import Question from './Question/QuestionContainer.js';
import Quote from './Quote/QuoteContainer.js';

import './Survey.scss';

const Survey = ({
  surveyQuestions, // boolean that basically says if there are surveys to show
}) => (
  <div className="survey">
    {surveyQuestions.length ?
    	<Question question={surveyQuestions[0]} /> :
      <Quote />}
  </div>
);

Survey.propTypes = {
  showQuote: PropTypes.bool,
  surveyQuestions: PropTypes.array,
};

export default Survey;
