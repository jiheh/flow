import React, { Component, PropTypes } from 'react';

class MultipleChoice extends Component {
  constructor(props) {
    super(props)
  }

  static PropTypes = {
    questionId: PropTypes.number.isRequired,
    surveyId: PropTypes.number.isRequired,
    sendResponse: PropTypes.func.isRequired,
    responseOptions: PropTypes.array.isRequired,
  };

  render() {
    const {
      questionId,
      surveyId,
      sendResponse,
      responseOptions,
    } = this.props;

    let clicked = false;

    let onClickFunction = (currentRef, type) => {
      if (!clicked) {
        clicked = true;
        if (type === "HAPPY") {
          this.refs.neutralEmoji.className = "dissolving";
          this.refs.sadEmoji.className = "dissolving";
          currentRef.className = "dissolvingBigger";
        } else if (type === "NEUTRAL") {
          this.refs.happyEmoji.className = "dissolving";
          this.refs.sadEmoji.className = "dissolving";
          currentRef.className = "dissolvingBigger";
        } else if (type === "SAD") {
          this.refs.happyEmoji.className = "dissolving";
          this.refs.neutralEmoji.className = "dissolving";
          currentRef.className = "dissolvingBigger";
        }
        setTimeout(() => {
          sendResponse({ surveyId, questionId, value: type });
          this.refs.happyEmoji.className = this.refs.happyEmoji.className = "individualEmoji";
          this.refs.neutralEmoji.className = this.refs.neutralEmoji.className = "individualEmoji";
          this.refs.sadEmoji.className = this.refs.sadEmoji.className = "individualEmoji";
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
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
  }
}

export default MultipleChoice;
