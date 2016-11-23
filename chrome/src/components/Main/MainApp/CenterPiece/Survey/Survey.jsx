import React, { PropTypes } from 'react';
// import Question from /////////////
// import Response from /////////////
import Quote from './Quote/QuoteContainer.js';

import './Survey.scss';

const Survey = ({
  surveyQuestions, // boolean that basically says if there are surveys to show
}) => (
  <div className="survey">
    {surveyQuestions.length ?
      <h1>test</h1> :
        <Quote />}
  </div>
);

Survey.propTypes = {
  showQuote: PropTypes.bool,
};

export default Survey;
