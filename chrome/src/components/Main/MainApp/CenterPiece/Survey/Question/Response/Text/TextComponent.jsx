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

  handleKeyUp = (evt) => {
    // 'enter' key was pressed
    if (evt.which == 13) {
      const { surveyId, questionId } = this.props;
      const { input } = this.state;
      this.props.sendResponse({ surveyId, questionId, value: input });
    }
  }

  render() {
    const { input } = this.state;

    return (
      <Text
        handleInput={this.handleInput}
        handleKeyUp={this.handleKeyUp}
        input={input}
        {...this.props}
      />
    );
  }
}

export default TextComponent;
