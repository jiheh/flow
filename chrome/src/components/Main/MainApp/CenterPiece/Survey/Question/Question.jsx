import React, { PropTypes } from 'react';
import './Question.scss';

import { propTypes as questionPropTypes } from '../../../../../../reducers/surveyQuestions';

const Question = ({ question }) => (
  <h2 className="question">{question.text}</h2>
);

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
