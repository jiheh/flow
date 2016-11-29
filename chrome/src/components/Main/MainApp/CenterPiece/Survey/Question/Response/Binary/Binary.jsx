import React, { PropTypes } from 'react';

const Binary = ({
  questionId,
  surveyId,
  sendResponse,
}) => (
  <div className='response-binary'>
    <button
      onClick={() => sendResponse({ surveyId, questionId, value: 'YES' })}
    >
      YES
    </button>
    <button
      onClick={() => sendResponse({ surveyId, questionId, value: 'NO' })}
    >
      NO
    </button>
  </div>
);

Binary.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  sendResponse: PropTypes.func.isRequired,
};

export default Binary;
