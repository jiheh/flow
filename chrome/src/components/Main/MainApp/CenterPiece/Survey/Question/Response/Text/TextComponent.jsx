import React, { PropTypes, Component } from 'react';

import Text from './Text.jsx';

class TextComponent extends Component {
  static propTypes = {
    questionId: PropTypes.number.isRequired,
    surveyId: PropTypes.number.isRequired,
    sendResponse: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }
  }

  handleInput = (evt) => {
    this.setState({ input: evt.target.value });
  }

  handleKeyUp = (evt, onClickFunc) => {
    // 'enter' key was pressed
    if (evt.which == 13) {
      const { surveyId, questionId } = this.props;
      const { input } = this.state;
      console.log("keepo kappa pog")
      console.log(onClickFunc)
      onClickFunc();
    }
  }

  render() {
    const { input } = this.state;
    const {
      surveyId,
      questionId,
      sendResponse,
    } = this.props;

    let clicked = false;

    let onClickFunction = () => {
      if (!clicked) {
        clicked = true;
        console.log(this.refs)
        this.refs.textBar.className = "dissolvingBiggerInput";
        setTimeout(() => {
          this.props.sendResponse({ surveyId, questionId, value: input });
          this.refs.textBar.className = "newTextBar";
          this.refs.textBar.value = "";
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
      <div className='response-text' >
        <input
          className='response-input'
          ref="textBar"
          type='text'
          value={input}
          onInput={this.handleInput}
          onKeyUp={(evt) => this.handleKeyUp(evt, onClickFunction)}
          />
      </div>
    );
  }
}

export default TextComponent;

// <Text
//   ref="textBar"
//   handleInput={this.handleInput}
//   handleKeyUp={(evt) => this.handleKeyUp(evt, onClickFunction)}
//   input={input}
//   {...this.props}
//   />
