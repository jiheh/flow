import React, { PropTypes, Component } from 'react';

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

  componentWillUpdate() {
  }

  handleInput = (evt) => {
    this.setState({ input: evt.target.value });
  }

  handleKeyUp = (evt, onClickFunc) => {
    if (evt.which == 13) {
      const { surveyId, questionId } = this.props;
      const { input } = this.state;
      onClickFunc();
    }
  }

  handleBlur = () => {
    this.refs.textBar.className = "newTextBarBlur";
  }

  handleFocus = () => {
    this.refs.textBar.className = "response-input";
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
        this.refs.textBar.className = "dissolvingBiggerInput";
        document.getElementById("questionPrompt").className = "dissolvingQuestion";
        setTimeout(() => {
          this.props.sendResponse({ surveyId, questionId, value: input });
          if (this.refs.textBar) {
            this.refs.textBar.value = "";
            this.refs.textBar.blur();
            this.refs.textBar.className = "newTextBar";
          }
          setTimeout(() => {
            clicked = false;
          }, 1100);
        }, 1000)
      }
    }

    return (
      <div className='response-text' >
        <input
          className="newTextBar"
          ref="textBar"
          type='text'
          value={input}
          onInput={this.handleInput}
          onKeyUp={(evt) => this.handleKeyUp(evt, onClickFunction)}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          />
      </div>
    );
  }
}

export default TextComponent;
