import React, { PropTypes } from 'react';

import './Login.scss';

const Login = ({
  handleInput,
  handleKeyUp,
  pageNum,
  input,
}) => (
  <div className="login-wrapper">
    <div className="login-text">
      <h1>{loginText(pageNum)}</h1>
    </div>
    <input
      className="login-input"
      value={input[pageNum]}
      onInput={handleInput}
      onKeyUp={handleKeyUp}
      type={pageNum === 2 ? 'password' : 'text'}
    >
    </input>
  </div>
);

Login.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  input: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

function loginText(pageNum) {
  switch (pageNum) {
    case 0:
    default:
      return 'What is your name?';

    case 1:
      return 'What is your email address?';

    case 2:
      return 'What is your password?';
  }
};

export default Login;
