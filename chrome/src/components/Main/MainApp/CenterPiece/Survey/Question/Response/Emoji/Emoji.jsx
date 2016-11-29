import React, { PropTypes } from 'react';
import '../Response.scss';

const Emoji = ({
  questionId,
  surveyId,
  sendResponse,
}) => (
  <div className='response-emoji'>
    <img
      src='http://localhost:8080/images/happy.png'
      onClick={() => sendResponse({ surveyId, questionId, value: 'HAPPY' })}>
    </img>

    <img
      src='http://localhost:8080/images/neutral.png'
      onClick={() => sendResponse({ surveyId, questionId, value: 'NEUTRAL' })}>
    </img>

    <img
      src='http://localhost:8080/images/sad.png'
      onClick={() => sendResponse({ surveyId, questionId, value: 'SAD' })}>
    </img>
  </div>
);

Emoji.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  sendResponse: PropTypes.func.isRequired,
};

export default Emoji;
