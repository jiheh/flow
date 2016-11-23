import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = {
	currentQuestion: null,
	allQuestions: [
		{
			question: 'How was your day today?',
			type: 'emoticon',
			answered: false
		}, {
			question: 'How would you rate CS101?',
			type: 'slider',
			answered: false
		}, {
			question: 'What is your favorite food?',
			type: 'multipleChoice',
			answered: false
		}, {
			question: 'Summarize yourself in one word.',
			type: 'textbox',
			answered: false
		}, {
			question: 'Do you identify yourself as a minority?',
			type: 'binary',
			answered: false
		}
	]
};

export const propTypes = PropTypes.object.isRequired;

export const SET_SURVEY_QUESTIONS = 'SET_SURVEY_QUESTIONS';
export const setSurveyQuestions = createAction(SET_SURVEY_QUESTIONS);

export default handleActions({
  SET_SURVEY_QUESTIONS: (state, { payload }) => {
    return {... state, currentQuestion: payload};
  },
}, initialState);
