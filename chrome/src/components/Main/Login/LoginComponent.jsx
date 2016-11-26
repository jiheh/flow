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
      inputClass: 'login-input'
    };
  }

  handleInput = (evt) => {
    const { pageNum, input } = this.state;

    if (evt.target.value !== input[pageNum]) {
      const newValue = pageNum > 0 ? evt.target.value.trim() : evt.target.value;
      this.setState({
        input: [...input.slice(0, pageNum),
                newValue,
                ...input.slice(pageNum + 1)],
        validationMessage: '',
      });
    }
  }

  handleBlur = () => {
    this.setState({ inputClass: 'login-input-blurred' });
  }

  handleFocus = () => {
    this.setState({ inputClass: 'login-input' });
  }

  nextPage = () => {
    const { pageNum, inputClass, input } = this.state;

    if(pageNum < 2) {
      this.setState({
        pageNum: pageNum + 1,
        inputClass: 'login-input',
      });
    } else {
      this.props.tryLogin(...input);
    }
  }

  handleKeyUp = (evt) => {
    const { input, pageNum } = this.state;
    const { tryLogin } = this.props;

    const text = input[pageNum];

    // 'enter' key was pressed
    if (evt.which == 13) {
      switch (pageNum) {
        case 0:
          // name
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your name.' })
          } else {
            this.nextPage();
          }
          break;

        case 1:
          // email
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your email address.' });
          } else if (!emailRegex.test(text)) {
            this.setState({ validationMessage: 'Please enter a valid email address.' });
          } else {
            this.nextPage();
          }
          break;

        case 2:
          // password
          if (text === '') {
            this.setState({ validationMessage: 'Please enter your password.' });
          } else if (text.length < 6) {
            this.setState({ validationMessage: 'Password must be at least 6 characters long.' });
          } else {
            this.nextPage();
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
      validationMessage,
      inputClass,
    } = this.state;

    return (
      <Login
        handleInput={this.handleInput}
        handleKeyUp={this.handleKeyUp}
        handleBlur={this.handleBlur}
        handleFocus={this.handleFocus}
        pageNum={pageNum}
        input={input}
        inputClass={inputClass}
        validationMessage={validationMessage}
      />
    );
  }
}

export default LoginComponent;
