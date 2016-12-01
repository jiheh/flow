import React, { PropTypes } from 'react';

import EmojiComponent from './Emoji/EmojiComponent.jsx';
import MultipleChoice from './MultipleChoice/MultipleChoice.jsx';
import BinaryComponent from './Binary/BinaryComponent.jsx';
import TextComponent from './Text/TextComponent.jsx';

import './Response.scss';

const Response = ({
  questionId,
  surveyId,
  type,
  sendResponse,
  questionRef,
  responseOptions,
  refs,
}) => (
  <div className="response">
    {type === 'emoji' &&
    <EmojiComponent
      questionRef={console.log()}
      questionId={questionId}
      surveyId={surveyId}
      sendResponse={sendResponse}
      refs={refs}
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
    <BinaryComponent
      questionId={questionId}
      surveyId={surveyId}
      sendResponse={sendResponse}
    />
    }
    {type === 'text' &&
    <TextComponent
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
