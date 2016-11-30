import React, { PropTypes } from 'react';

import EmojiComponent from './Emoji/EmojiComponent.jsx';
import MultipleChoice from './MultipleChoice/MultipleChoice.jsx';
import Binary from './Binary/Binary.jsx';
import Text from './Text/TextComponent.jsx';

import './Response.scss';

const Response = ({
  questionId,
  surveyId,
  type,
  sendResponse,
  questionRef,
  responseOptions,
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
    {type === 'multiple_choice' &&
    <MultipleChoice
      questionId={questionId}
      surveyId={surveyId}
      sendResponse={sendResponse}
      responseOptions={responseOptions}
    />
    }
    {type === 'binary' &&
    <Binary
      questionId={questionId}
      surveyId={surveyId}
      sendResponse={sendResponse}
    />
    }
    {type === 'text' &&
    <Text
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
  responseOptions: PropTypes.array,
};

export default Response;
