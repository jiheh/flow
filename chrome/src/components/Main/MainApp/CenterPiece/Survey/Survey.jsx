import React, { PropTypes } from 'react';
import Question from './Question/QuestionContainer.js';
// import Response from /////////////
import Quote from './Quote/QuoteContainer.js';

import './Survey.scss';

const Survey = ({
  surveyQuestions, // boolean that basically says if there are surveys to show
}) => (
  <div className="survey">
    {surveyQuestions.allQuestions.length ?
    	<Question /> :
      <Quote />}
  </div>
);

Survey.propTypes = {
  showQuote: PropTypes.bool,
};

export default Survey;
