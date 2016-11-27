import React, { PropTypes } from 'react';
import Question from './Question/QuestionContainer.js';
import Quote from './Quote/QuoteContainer.js';

import './Survey.scss';

const Survey = ({
  surveyQuestions,
  surveyId,
}) => (
  <div className="survey">
    {surveyQuestions.length > 0 ?
      <Question
        surveyId={surveyId}
        question={surveyQuestions[0]}
      />
      : <Quote />
    }
  </div>
);

Survey.propTypes = {
  surveyQuestions: PropTypes.array.isRequired,
  surveyId: PropTypes.number.isRequired,
};

export default Survey;
