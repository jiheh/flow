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
    };
  }

  handleInput = (evt) => {
    const { pageNum, input } = this.state;
    this.setState({
      input: [...input.slice(0, pageNum),
              evt.target.value,
              ...input.slice(pageNum + 1)
             ]
    });
  }

  handleKeyUp = (evt) => {
    const { input, pageNum } = this.state;
    const { tryLogin } = this.props;

    if (evt.which == 13) {
      if (pageNum < 2 && input[pageNum] !== '' ) {
        // name or email page, input not empty
        if (pageNum !== 1 || (pageNum === 1 && emailRegex.test(input[pageNum]))) {
          // name page, or email page and valid email
          this.setState({ pageNum: pageNum + 1});
        }
      } else if (pageNum === 2 && input[pageNum] !== '') {
        // password page and valid password
        tryLogin(...input);
      } else {
        console.log('some sort of error');
      }
    }
  }

  render() {
    const { tryLogin } = this.props;
    const { pageNum, input } = this.state;

    return (
      <Login
        handleInput={this.handleInput}
        handleKeyUp={this.handleKeyUp}
        pageNum={pageNum}
        input={input}
      />
    );
  }
}

export default LoginComponent;
