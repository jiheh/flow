import React, { PropTypes } from 'react';

import EmojiComponent from './Emoji/EmojiComponent.jsx';
import './Response.scss';

const Response = ({
  questionId,
  surveyId,
  type,
  sendResponse,
  questionRef,
}) => (
  <div className="response">
    {type === 'emoji' &&
    <EmojiComponent
      questionRef={questionRef}
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
