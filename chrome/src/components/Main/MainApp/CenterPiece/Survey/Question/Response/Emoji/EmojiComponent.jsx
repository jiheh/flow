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
      <div className='response-emoji'>
        <img
          ref="happyEmoji"
          src='http://localhost:8080/images/happy.png'
          onClick={() => onClickFunction(this.refs.happyEmoji, "HAPPY")}>
        </img>

        <img
          ref="neutralEmoji"
          src='http://localhost:8080/images/neutral.png'
          onClick={() => onClickFunction(this.refs.neutralEmoji, "NEUTRAL")}>
        </img>

        <img
          ref="sadEmoji"
          src='http://localhost:8080/images/sad.png'
          onClick={() => onClickFunction(this.refs.sadEmoji, "SAD")}>
        </img>
      </div>
    );
  }

}

// setTimeout(() => {
//   sendResponse({ surveyId, questionId, value: 'HAPPY' });
// }, 2000)
export default EmojiComponent;
// const Emoji = ({
//   questionId,
//   surveyId,
//   sendResponse,
// }) => (
//   <div className='response-emoji'>
//     <img
//       src='http://localhost:8080/images/happy.png'
//       onClick={() => setTimeout(() => { sendResponse({ surveyId, questionId, value: 'HAPPY' }); }, 2000)}>
//     </img>
//
//     <img
//       src='http://localhost:8080/images/neutral.png'
//       onClick={() => setTimeout(() => { sendResponse({ surveyId, questionId, value: 'NEUTRAL' }); }, 2000)}>
//     </img>
//
//     <img
//       src='http://localhost:8080/images/sad.png'
//       onClick={() => setTimeout(() => { sendResponse({ surveyId, questionId, value: 'SAD' }); }, 2000)}>
//     </img>
//   </div>
// );




// class QuoteComponent extends Component {
//   static propTypes = {
//     getQuote: PropTypes.func.isRequired,
//     quote: quotePropTypes,
//   };
//
//
// }
//
// export default QuoteComponent;
