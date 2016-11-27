import React, { PropTypes } from 'react';

const Emoji = ({
  questionId,
  surveyId,
  sendResponse,
}) => (
  <div className="response-emoji">
    <button onClick={() => sendResponse{ surveyId, questionId, 'SAD' }}>
      SAD
    </button>

    <button onClick={() => sendResponse{ surveyId, questionId, 'NEUTRAL' }}>
      NEUTRAL
    </button>
    <button onClick={() => sendResponse{ surveyId, questionId, 'HAPPY' }}>
      HAPPY
    </button>
  </div>
);

Emoji.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  sendResponse: PropTypes.func.isRequired,
};

export default Emoji;
