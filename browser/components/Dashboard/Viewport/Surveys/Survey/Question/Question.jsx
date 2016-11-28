import React, { PropTypes } from 'react';
import QuestionData from './QuestionData/QuestionData.jsx';

const Question = ({ question, index }) => (
  <div className="question">
    <h5>Question {index}:</h5>
    {question.text}
    Type: {question.type}
    <QuestionData
      type={question.type}
      responses={question.responses}
    />
  </div>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Question;
