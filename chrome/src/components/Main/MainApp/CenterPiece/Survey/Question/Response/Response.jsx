import React, { PropTypes } from 'react';

const Response = ({
  questionId,
  surveyId,
  type,
  sendResponse,
}) => (
  <div className="response">
    RESPONSE INPUTS HERE
    {type === 'emoji' &&
    <Emoji
      questionId={questionId}
      surveyId={surveyId}
      sendResponse={sendResponse}
    />
    }
  </div>
);

Response.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  sendResponse: PropTypes.func.isRequired,
};

export default Response;
