import React, { Component, PropTypes } from 'react';
import './Question.scss';

import Response from './Response/ResponseContainer.js';

class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  componentWillUpdate() {
    console.log("habibi");
    console.log(this.refs.currentQuestion);
    this.refs.currentQuestion.className = "questionSpan";
  }

  render() {
    const { question, surveyId } = this.props;

    return (
      <div className="question">
        <span id="test" ref="currentQuestion">{question.text}</span>
        <Response
          questionRef={console.log("This.refs: ", this.refs.currentQuestion)}
          responseOptions={question.responseOptions}
          questionId={question.id}
          surveyId={surveyId}
          type={question.type}
          className="responseDiv"
          refs={this.refs}
        />
      </div>
    );

  }
}

export default Question;
