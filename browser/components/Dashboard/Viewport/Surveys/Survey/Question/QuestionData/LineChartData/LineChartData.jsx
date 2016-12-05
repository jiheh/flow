import React, { PropTypes } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { generateSurveyDates } from  './helpers'
import './LineChartData.scss';

const data = [
      {name: 'Page A', uv: 'a', pv: 2400, amt: 2400},
      {name: 'Page A', uv: 'ab', pv: 1398, amt: 2210},
      {name: 'Page C', uv: 'abac', pv: 9800, amt: 2290},
      {name: 'Page D', uv: 'afbc', pv: 3908, amt: 2000},
      {name: 'Page E', uv: 'ahbc', pv: 4800, amt: 2181},
      {name: 'Page F', uv: 'aobc', pv: 3800, amt: 2500},
      {name: 'Page G', uv: 'aqqbc', pv: 4300, amt: 2100},
];


const LineChartData = ({ responses, survey }) => (
  <div>
    {console.log('survey',survey.name,'surveyFrequency',survey.frequency.length)}
    {console.log('responses',responses.length)}
    {responses.length === 0 ? 'No responses.' :
     (
        <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="pv"/>
       <YAxis type="category"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{r: 8}}/>
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
