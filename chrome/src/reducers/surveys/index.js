import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';
import _ from 'lodash';

export const initialState = [];

export const propTypes = PropTypes.array;

export const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS';
export const receiveSurveys = createAction(RECEIVE_SURVEYS);

export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const removeQuestion = createAction(REMOVE_QUESTION);

import { UPDATE_CURRENT_CHANNELS, CLEAR_CURRENT_CHANNELS } from '../currentChannels';

export default handleActions({
  RECEIVE_SURVEYS: (state, { payload }) => {
    return payload;
  },

  REMOVE_QUESTION: (state, { payload }) => {
    const { surveyId, questionId } = payload;
    return state.map((survey) => {
      if (survey.id !== surveyId) { return survey; }

      const surveyCopy = _.cloneDeep(survey);
      const questions = _.filter(survey.questions,
                                 question => question.id !== questionId);

      surveyCopy.questions = questions;
      return surveyCopy;
    })
      .filter(survey => survey.questions.length > 0);
  },

  CLEAR_CURRENT_CHANNELS: (state, { payload }) => {
    return [];
  },

  UPDATE_CURRENT_CHANNELS: (state, { payload }) => {
    const newChannels = payload;
    const newChannelIds = newChannels.map(channel => channel[1]);

    return state.filter(survey => newChannelIds.includes(survey.channel_id));
  },
}, initialState);
