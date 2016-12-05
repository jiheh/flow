import React, { PropTypes } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {generateSurveyBounds, convertToTimestamp, fittingAlgo, convertToRealDate, generateData, doAverage, convertData } from  './helpers'

import './LineChartData.scss';

const data = [
      {name: 'Page A', uv: 4000, pv: 'aoisnfoiansfoina', amt: 2400},
      {name: 'Page B', uv: 3000, pv: 'af0ampowmop', amt: 2210},
      {name: 'Page C', uv: 2000, pv: 'aaksf0-k-', amt: 2290},
      {name: 'Page B', uv: 3000, pv: 'af0ampowmop', amt: 2210},
      {name: 'Page C', uv: 2000, pv: 'aaksf0-k-', amt: 2290},
];



const LineChartData = ({ responses, survey }) => (
  <div>
    {responses.length === 0 ? 'No responses.' :
     (
      <LineChart width={600} height={300} data={convertData(generateData(survey.frequency,responses))} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="time"/>
        <YAxis type="category"/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="response" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
     )
    }
  </div>  
);



LineChartData.propTypes = {
  responses: PropTypes.array.isRequired,
};
  // surveys: PropTypes.array.isRequired

export default LineChartData;
