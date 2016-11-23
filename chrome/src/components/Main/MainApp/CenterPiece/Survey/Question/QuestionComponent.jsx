import React, { Component, PropTypes } from 'react';

import { propTypes as questionPropTypes } from '../../../../../../reducers/surveyQuestions';
import Question from './Question.jsx';

class QuestionComponent extends Component {

  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    setQuestion: PropTypes.func.isRequired,
    surveyQuestions: questionPropTypes,
  };

  componentDidMount() {
    console.log('LOOK HERE', this.props.surveyQuestions.allQuestions[0])
    this.props.setQuestion(this.props.surveyQuestions.allQuestions[0].question);
  }

  render() {
    const {
      surveyQuestions,
      setQuestion
    } = this.props;

    return (
      <Question question={surveyQuestions.currentQuestion}/>
    );
  }
}

export default QuestionComponent;
