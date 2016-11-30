import React, { PropTypes } from 'react';

const Text = ({
  questionId,
  surveyId,
  sendResponse,
  handleKeyUp,
  handleInput,
  input,
}) => (
  <div className='response-text' >
    <input
      value={input}
      onInput={handleInput}
      onKeyUp={handleKeyUp}
    />
  </div>
);

Text.propTypes = {
  questionId: PropTypes.number.isRequired,
  surveyId: PropTypes.number.isRequired,
  sendResponse: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
};

module.exports = Text;
