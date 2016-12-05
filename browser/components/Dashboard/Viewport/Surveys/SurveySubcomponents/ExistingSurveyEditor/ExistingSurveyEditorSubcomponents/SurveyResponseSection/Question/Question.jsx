import React, { PropTypes } from 'react';
import QuestionData from './QuestionData/QuestionData.jsx';
import './Question.scss';

const Question = ({ question, index, survey }) => (
  <div className="question">
  {console.log('passed form container survey',survey)}
    <h5>Question {index}:</h5>
    <div className="question-text">{question.text}</div>
    <br />
    <QuestionData
      type={question.type}
      responses={question.responses}
      survey={survey}
    />
  </div>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
// surveys: PropTypes.array.isRequired

export default Question;
