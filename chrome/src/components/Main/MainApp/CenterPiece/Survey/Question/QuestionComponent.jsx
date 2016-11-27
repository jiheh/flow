import React, { Component, PropTypes } from 'react';

import Question from './Question.jsx';

class QuestionComponent extends Component {

  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    question: PropTypes.object,
  };

  render() {
    return (
      <Question {...this.props} />
    );
  }
}

export default QuestionComponent;
