import React, { Component, PropTypes } from 'react';
import './Question.scss';

import Response from './Response/ResponseContainer.js';

class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  componentWillUpdate() {
    this.refs.currentQuestion.className = "questionSpan";
  }

  render() {
    const { question, surveyId } = this.props;

    return (
      <div className="question">
        <span id="questionPrompt" ref="currentQuestion">{question.text}</span>
        <Response
          responseOptions={question.responseOptions}
          questionId={question.id}
          surveyId={surveyId}
          type={question.type}
          className="responseDiv"
        />
      </div>
    );

  }
}

export default Question;
