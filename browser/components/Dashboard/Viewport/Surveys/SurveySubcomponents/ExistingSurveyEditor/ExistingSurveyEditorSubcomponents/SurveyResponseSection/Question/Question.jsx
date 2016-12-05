import React, { PropTypes } from 'react';
import QuestionData from './QuestionData/QuestionData.jsx';
import './Question.scss';

const Question = ({ question, index }) => (
  <div className="question">
    <h5>Question {index}:</h5>
    <div className="question-text">{question.text}</div>
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
