import React, { PropTypes } from 'react';
import PieChartData from './PieChartData/PieChartData.jsx';
import TextData from './TextData/TextData.jsx';

const QuestionData = ({ type, responses }) => (
  <div>
    {responses.length === 0 && 'No responses.'}
    {responses.length > 0 && (type==='emoji' || type==='multiple_choice' || type==='binary') && <PieChartData responses={responses} />}
    {responses.length > 0 && type==='text' && <TextData responses={responses} />}
  </div>
);

QuestionData.propTypes = {
  type: PropTypes.string.isRequired,
  responses: PropTypes.array.isRequired,
};

export default QuestionData;
