import React, { Component, PropTypes } from 'react';
import '../Response.scss';

class Text extends Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    questionId: PropTypes.number.isRequired,
    surveyId: PropTypes.number.isRequired,
    sendResponse: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleKeyUp: PropTypes.func.isRequired,
  };

  render() {
    const {
      questionId,
      surveyId,
      sendResponse,
      handleKeyUp,
      handleInput,
      input,
    } = this.props;

    return (
      <div className='response-text' >
        <input
          className='response-input'
          type='text'
          value={input}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          />
      </div>
    );
  }

}

module.exports = Text;
