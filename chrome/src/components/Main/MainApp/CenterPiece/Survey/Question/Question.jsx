import React, { Component, PropTypes } from 'react';
import './Question.scss';

import Response from './Response/ResponseContainer.js';

class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  render() {
    const { question, surveyId } = this.props;
    
    return (
      <div className="question">
        <span ref="currentQuestion">{question.text}</span>
        <Response
          console={console.log("Jiheh Habibi", this.refs.currentQuestion)}
          questionRef={this.refs.currentQuestion}
          questionId={question.id}
          surveyId={surveyId}
          type={question.type}
          className="responseDiv"
          />
      </div>
    );

  }
}

// const Question = ({
//   question,
//   surveyId,
// }) => (
// );


export default Question;
