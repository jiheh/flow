import React, { Component, PropTypes } from 'react';

import '../Response.scss';

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

    let onClickFunction = (idx, type) => {
      if (!clicked) {
        clicked = true;
        if (idx === 0) {
          this.refs[1].className = "dissolving";
          this.refs[2].className = "dissolving";
          this.refs[3].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
        } else if (idx === 1) {
          this.refs[2].className = "dissolving";
          this.refs[3].className = "dissolving";
          this.refs[0].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
        } else if (idx === 2) {
          this.refs[3].className = "dissolving";
          this.refs[0].className = "dissolving";
          this.refs[1].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
        } else if (idx === 3) {
          this.refs[0].className = "dissolving";
          this.refs[1].className = "dissolving";
          this.refs[2].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
        }
        setTimeout(() => {
          sendResponse({ surveyId, questionId, value: type })
          if (this.refs[0] && this.refs[1] && this.refs[2] && this.refs[3]) {
            this.refs[0].className = "individualEmoji";
            this.refs[1].className = "individualEmoji";
            this.refs[2].className = "individualEmoji";
            this.refs[3].className = "individualEmoji";
          }
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
      <div className='response-multiple-choice'>
        <ul>
          {responseOptions.length && responseOptions.map((option, idx) => (
             <li
              className="response-choice"
              onClick={() => console.log("keepo")}
              key={idx}
             >{option}<img
             className="individualEmoji"
             ref={idx}
             src='http://localhost:8080/images/button.png'
             onClick={() => onClickFunction(idx, option)}
             ></img></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MultipleChoice;
