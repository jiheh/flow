import React, { PropTypes } from 'react';
import PieChartData from './PieChartData/PieChartData.jsx';
import TextData from './TextData/TextData.jsx';
import LineChartData from './LineChartData/LineChartData.jsx'


const QuestionData = ({ type, responses, survey }) => (
  <div>
    {console.log('survey',survey)}
    {responses.length === 0 && 'No responses.'}
    {responses.length > 0 && (type==='emoji' || type==='multiple_choice' || type==='binary') && (!survey.frequency || survey.frequency.length === 0) && <PieChartData responses={responses} />}
    {responses.length > 0 && (type==='emoji' || type==='multiple_choice' || type==='binary') && (survey.frequency && survey.frequency.length > 0) && <LineChartData responses={responses} survey={survey} />}
    {responses.length > 0 && type==='text' && <TextData responses={responses} />}
  </div>
);

QuestionData.propTypes = {
  type: PropTypes.string.isRequired,
  responses: PropTypes.array.isRequired,
};
  // surveys: PropTypes.array.isRequired

export default QuestionData;
