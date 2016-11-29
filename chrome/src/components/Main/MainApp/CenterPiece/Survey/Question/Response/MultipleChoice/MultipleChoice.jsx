import React, { PropTypes } from 'react';

const MultipleChoice = ({
  questionId,
  surveyId,
  sendResponse,
  responseOptions,
}) => (
  <div className='response-multiple-choice'>
    {responseOptions.length && responseOptions.map((option, idx) => (
       <button
        className="response-choice"
        onClick={() => sendResponse({ surveyId, questionId, value: option })}
       >
         {option}
       </button>
    ))}
  </div>
);

MultipleChoice.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  sendResponse: PropTypes.func.isRequired,
  responseOptions: PropTypes.array.isRequired,
};

export default MultipleChoice;
