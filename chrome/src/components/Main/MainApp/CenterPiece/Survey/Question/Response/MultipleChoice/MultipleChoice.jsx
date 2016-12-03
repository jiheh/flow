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
          this.refs[8].className = "dissolvingMultiple";
          this.refs[12].className = "dissolvingMultiple";
          this.refs[16].className = "dissolvingMultiple";
          this.refs[4].className = "dissolvingBigger";
        } else if (idx === 1) {
          this.refs[2].className = "dissolving";
          this.refs[3].className = "dissolving";
          this.refs[0].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
          this.refs[12].className = "dissolvingMultiple";
          this.refs[16].className = "dissolvingMultiple";
          this.refs[4].className = "dissolvingMultiple";
          this.refs[8].className = "dissolvingBigger";
        } else if (idx === 2) {
          this.refs[3].className = "dissolving";
          this.refs[0].className = "dissolving";
          this.refs[1].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
          this.refs[16].className = "dissolvingMultiple";
          this.refs[4].className = "dissolvingMultiple";
          this.refs[8].className = "dissolvingMultiple";
          this.refs[12].className = "dissolvingBigger";
        } else if (idx === 3) {
          this.refs[0].className = "dissolving";
          this.refs[1].className = "dissolving";
          this.refs[2].className = "dissolving";
          this.refs[idx].className = "dissolvingBigger";
          this.refs[4].className = "dissolvingMultiple";
          this.refs[8].className = "dissolvingMultiple";
          this.refs[12].className = "dissolvingMultiple";
          this.refs[16].className = "dissolvingBigger";
        }
        setTimeout(() => {
          sendResponse({ surveyId, questionId, value: type })
          if (this.refs[0] && this.refs[1] && this.refs[2] && this.refs[3]) {
            this.refs[0].className = "individualEmoji";
            this.refs[1].className = "individualEmoji";
            this.refs[2].className = "individualEmoji";
            this.refs[3].className = "individualEmoji";
            this.refs[4].className = "multipleText";
            this.refs[8].className = "multipleText";
            this.refs[12].className = "multipleText";
            this.refs[16].className = "multipleText";
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
              key={idx}
             ><div className="multipleText"
             ref={(idx + 1) * 4}
             >{option}</div><img
             className="individualEmoji"
             ref={idx}
             src='http://localhost:8080/images/button2.png'
             onClick={() => onClickFunction(idx, option)}
             ></img>
           </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MultipleChoice;
