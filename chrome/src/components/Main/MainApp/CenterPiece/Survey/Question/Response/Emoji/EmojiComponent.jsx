import React, { Component, PropTypes } from 'react';
import '../Response.scss';

class EmojiComponent extends Component {
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
      questionRef,
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
          if (this.refs.happyEmoji && this.refs.neutralEmoji && this.refs.sadEmoji) {
            this.refs.happyEmoji.className = this.refs.happyEmoji.className = "individualEmoji";
            this.refs.neutralEmoji.className = this.refs.neutralEmoji.className = "individualEmoji";
            this.refs.sadEmoji.className = this.refs.sadEmoji.className = "individualEmoji";
          }
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
      <div className='response-emoji'>
        <img
          className="individualEmoji"
          ref="happyEmoji"
          src='http://localhost:8080/images/happy.png'
          onClick={() => onClickFunction(this.refs.happyEmoji, "HAPPY")}>
        </img>

        <img
          className="individualEmoji"
          ref="neutralEmoji"
          src='http://localhost:8080/images/neutral.png'
          onClick={() => onClickFunction(this.refs.neutralEmoji, "NEUTRAL")}>
        </img>

        <img
          className="individualEmoji"
          ref="sadEmoji"
          src='http://localhost:8080/images/sad.png'
          onClick={() => onClickFunction(this.refs.sadEmoji, "SAD")}>
        </img>
      </div>
    );
  }

}

export default EmojiComponent;
