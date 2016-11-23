import React, { PropTypes, Component } from 'react';

import Login from './Login.jsx';

const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

class LoginComponent extends Component {
  static propTypes = {
    tryLogin: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      pageNum: 0,
      input: ['','',''],
      validationMessage: '',
    };
  }

  handleInput = (evt) => {
    const { pageNum, input } = this.state;

    if (evt.target.value !== input[pageNum]) {
      this.setState({
        input: [...input.slice(0, pageNum),
                evt.target.value,
                ...input.slice(pageNum + 1)],
        validationMessage: '',
      });
    }
  }

  handleKeyUp = (evt) => {
    const { input, pageNum } = this.state;
    const { tryLogin } = this.props;

    const text = input[pageNum];

    if (evt.which == 13) {
      switch (pageNum) {
        case 0:
          // name
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your name.' })
          } else {
            this.setState({ pageNum: pageNum + 1 });
          }
          break;

        case 1:
          // email
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your email address.' });
          } else if (!emailRegex.test(text)) {
            this.setState({ validationMessage: 'Please enter a valid email address.' });
          } else {
            this.setState({ pageNum: pageNum + 1 });
          }
          break;

        case 2:
          // password
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your password.' });
          } else if (text.length < 6) {
            this.setState({ validationMessage: 'Password must be at least 6 characters long.' });
          } else {
            tryLogin(...input);
          }
          break;

        default:
          this.setState({ validationMessage: 'Invalid input.' });
      }
    }
  }

  render() {
    const { tryLogin } = this.props;
    const {
      pageNum,
      input,
      validationMessage
    } = this.state;

    return (
      <Login
        handleInput={this.handleInput}
        handleKeyUp={this.handleKeyUp}
        pageNum={pageNum}
        input={input}
        validationMessage={validationMessage}
      />
    );
  }
}

export default LoginComponent;
