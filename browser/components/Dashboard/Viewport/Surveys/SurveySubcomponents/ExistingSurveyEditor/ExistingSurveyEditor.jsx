import React, { Component, PropTypes } from 'react';
import './ExistingSurveyEditor.scss';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';

class SurveyForm extends Component {

  static propTypes = {
    toggleNewSurveyForm: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      channelId: this.props.channel.id,
      name: '',
      description: '',
      questions: [],
      sample: 100,
      responses: {}
    };
  }

  render() {

    const { surveyID } = this.props;

    return(
      <div>
        <div className="pt-dialog-header">

          <span className="pt-icon-large pt-icon-clipboard"></span>
          <h5></h5>

        </div>

      </div>
    )


  }

}

export default SurveyForm;