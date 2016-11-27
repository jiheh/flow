import React, { PropTypes } from 'react';
import Question from './Question/QuestionContainer.js';
import Quote from './Quote/QuoteContainer.js';

import './Survey.scss';

const Survey = ({
  surveyQuestions,
  surveyIds,
}) => (
  <div className="survey">
    {surveyQuestions.length ?
      <Question
        surveyId={surveyIds[0]}
        question={surveyQuestions[0]}
      />
      : <Quote />
    }
  </div>
);

Survey.propTypes = {
  surveyQuestions: PropTypes.array.isRequired,
  surveyIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Survey;
