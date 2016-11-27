import React, { PropTypes } from 'react';

const Emoji = ({
  questionId,
  surveyId,
  sendResponse,
}) => (
  <div className="response-emoji">
    <button onClick={() => sendResponse({ surveyId, questionId, value: 'SAD' })}>
      SAD
    </button>

    <button onClick={() => sendResponse({ surveyId, questionId, value: 'NEUTRAL' })}>
      NEUTRAL
    </button>
    <button onClick={() => sendResponse({ surveyId, questionId, value: 'HAPPY' })}>
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
