import React, { Component, PropTypes } from 'react';
import Survey from './Survey.jsx';

class SurveyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      survey: {},
    };
  }
  componentDidMount() {
    this.props.fetchSurvey(this.props.surveyId)
      .then((res) => {
        this.setState({ survey: res.data });
        console.log('survey: ');
        console.log(res.data);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.survey).length > 0 &&
         <Survey survey={this.state.survey} />}
      </div>
    );
  }
}

SurveyComponent.propTypes = {
  surveyId: PropTypes.number.isRequired,
  fetchSurvey: PropTypes.func.isRequired,
};

export default SurveyComponent;
