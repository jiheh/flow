import React, { PropTypes } from 'react';
import './Question.scss';

import Response from './Response/ResponseContainer.js';

const Question = ({
  question,
  surveyId,
}) => (
  <div className="question">
    <h2>{question.text}</h2>
    <Response
      questionId={question.id}
      surveyId={surveyId}
      type={question.type}
      responseOptions={question.responseOptions}
    />
  </div>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
