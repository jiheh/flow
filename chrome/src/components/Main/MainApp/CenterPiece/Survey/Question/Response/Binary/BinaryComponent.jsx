import React, { Component, PropTypes } from 'react';
import '../Response.scss';
import server from '../../../../../../../../server.js';

class BinaryComponent extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    questionId: PropTypes.number.isRequired,
    surveyId: PropTypes.number.isRequired,
    sendResponse: PropTypes.func.isRequired,
  };

  componentDidMount() {

  }

  render() {
    const {
      questionId,
      surveyId,
      sendResponse,
    } = this.props;

    let clicked = false;

    let onClickFunction = (currentRef, type) => {
      if (!clicked) {
        clicked = true;
        if (type === "YES") {
          this.refs.noIcon.className = "dissolving";
          currentRef.className = "dissolvingBigger";
        } else if (type === "NO") {
          this.refs.yesIcon.className = "dissolving";
          currentRef.className = "dissolvingBigger";
        }
        document.getElementById("questionPrompt").className = "dissolvingQuestion";
        setTimeout(() => {
          sendResponse({ surveyId, questionId, value: type });
          if (this.refs.yesIcon && this.refs.noIcon) {
            this.refs.yesIcon.className = "individualEmoji";
            this.refs.noIcon.className = "individualEmoji";
          }
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
      <div className='response-binary'>
        <img
          className="individualEmoji"
          ref="yesIcon"
          src={`${server}images/yes.png`}
          onClick={() => onClickFunction(this.refs.yesIcon, "YES")}>
        </img>
        <img
          className="individualEmoji"
          ref="noIcon"
          src={`${server}images/no.png`}
          onClick={() => onClickFunction(this.refs.noIcon, "NO")}>
        </img>
      </div>
    );
  }

}

export default BinaryComponent;
