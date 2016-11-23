import React, { PropTypes } from 'react';
import './Question.scss';

import { propTypes as questionPropTypes } from '../../../../../../reducers/surveyQuestions';

const Question = ({ question }) => (
  <h2 className="question">{question}</h2>
);

// Question.propTypes = {
//   question: questionPropTypes,
// };

export default Question;
