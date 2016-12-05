import React, { Component, PropTypes } from 'react';
import './ExistingSurveyEditor.scss';
import { Popover, PopoverInteractionKind, Position, Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core';

import SurveyResponseSection from './ExistingSurveyEditorSubcomponents/SurveyResponseSection/SurveyResponseSection.jsx'

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
      frequency: null,
      survey: {},

      dataLoaded: false,
      edited: false,
      saved: false,
    }

  }

  componentDidMount(){

    axios.get(`api/survey/survey/${this.props.surveyID}`)
      .then(data => data.data)
      .then(surveyData => {

        // extract only the fields that we need to visualize/edit
        const { active,
                description,
                name,
                frequency,
                questions,
              } = surveyData;

        // setting local state of form
        this.setState({
          dataLoaded: true,
          name,
          description,
          questions,
          active,
          frequency,
          survey: surveyData,
        })

      })

      .catch(err => {
        console.log(err);
      })
  }

  render() {

    const { currentChannel, currentSurveyID, toggleExistingSurveyEditor } = this.props;

    return(
      <div>
        <div className="pt-dialog-header">
          <span className="pt-icon-large pt-icon-clipboard"></span>
          <h5>Survey</h5>

            <button aria-label="Close"
                    className="pt-dialog-close-button pt-icon-small-cross"
                    onClick={() => toggleExistingSurveyEditor()}/>

        </div>

          <div className="pt-dialog-body">

            {this.state.dataLoaded 
              ?
              <div>
                <h3>{this.state.name}</h3>
                <Tabs>
                  <TabList>
                    <Tab >Questions</Tab>
                    <Tab aria-selected="true">Responses</Tab>
                  </TabList>
                  <TabPanel>
                      Questions
                  </TabPanel>
                  <TabPanel>
                      <SurveyResponseSection  currentChannelNumUsers={currentChannel.users.length}
                                              questions={this.state.questions}
                                              survey={this.state.survey}
                                              frequency={this.state.frequency}/>
                  </TabPanel>
                </Tabs>
              </div>
              :
              <div className="pt-spinner pt-small">
                <div className="pt-spinner-svg-container">
                  <svg viewBox="0 0 100 100">
                    <path className="pt-spinner-track" d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"></path>
                    <path className="pt-spinner-head" d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"></path>
                  </svg>
                </div>
              </div>
            }


          </div>

      </div>
    )


  }

}

export default SurveyForm;