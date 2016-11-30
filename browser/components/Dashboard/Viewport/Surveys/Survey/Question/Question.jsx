import React, { PropTypes } from 'react';
import QuestionData from './QuestionData/QuestionData.jsx';

const Question = ({ question, index }) => (
  <div className="question">
    <h5>Question {index}:</h5>
    <div>{question.text}</div>
    <div>Type: {question.type}</div>
    <br />
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
