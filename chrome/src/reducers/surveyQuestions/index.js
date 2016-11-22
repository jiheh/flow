import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = [];

export const propTypes = PropTypes.string.isRequired;

export const SET_SURVEY_QUESTIONS = 'SET_SURVEY_QUESTIONS';
export const setSurveyQuestions = createAction(SET_SURVEY_QUESTIONS);

export default handleActions({
  SET_SURVEY_QUESTIONS: (state, { payload }) => {
    return payload;
  },
}, initialState);
