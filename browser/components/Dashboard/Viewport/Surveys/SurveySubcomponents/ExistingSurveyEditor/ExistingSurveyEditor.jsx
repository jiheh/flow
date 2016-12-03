import React, { Component, PropTypes } from 'react';
import './ExistingSurveyEditor.scss';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import axios from 'axios';


class SurveyForm extends Component {

  static propTypes = {
    toggleExistingSurveyEditor: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      surveyID: this.props.currentSurveyID,
      name: '',
      description: '',
      questions: [],
      active: true,

      dataLoaded: false,
      edited: false,
      saved: false,
    }

  }

  componentDidMount(){

    axios.get(`api/survey/survey/${this.props.surveyID}`)
      .then(data => data.data)
      .then(surveyData => {

        // all fields sent by server
        const { active,
                admin_id,
                channel_id,
                created_at,
                description,
                id,
                name,
                owner_id,
                questions
              } = surveyData;

        // setting local state of form
        this.setState({
          dataLoaded: true,
          name,
          description,
          questions,
          active,
        })

      })

      .catch(err => {
        console.log(err);
      })
  }

  render() {

    const { currentSurveyID, toggleExistingSurveyEditor } = this.props;

    const closeConfirmPopover = (
      <div>
        <h5>Are you sure you want to close?</h5>
        <p>Your changes will be discarded</p>
        <button className="pt-button pt-intent-danger pt-fill"
                onClick={() => this.props.toggleNewSurveyForm()}>
          Close
        </button>
      </div>
    )

    return(
      <div>


      </div>
    )


  }

}

export default SurveyForm;