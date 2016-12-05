import React, { PropTypes } from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import './PieChartData.scss';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const responsesToData = (responses) => {
  // responses:
  // [ { value } ]
  const result = responses.reduce((agg, response) => {
    if (!agg[response.value]) {
      agg[response.value] = 1;
    } else {
      agg[response.value]++;
    }

    return agg;
  }, []);
  const total = Object.keys(result).reduce((agg, key) => agg + result[key], 0);
  return Object.keys(result).map(key => ({ name: key, value: result[key], percent: result[key]/total }));
};

const PieChartData = ({ responses }) => (
  <div>
    {responses.length === 0 ? 'No responses.' :
     (
        <PieChart width={350} height={350} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
          <Pie
            data={responsesToData(responses)}
            cx='50%'
            cy='45%'
            innerRadius='45%'
            outerRadius='60%'
            paddingAngle={3}
            label={(data) => `${Math.floor(data.percent * 100)}%`}
          >

           {responsesToData(responses).map((entry, index) => {
            return(<Cell fill={COLORS[index % COLORS.length]} key={index} />)
          })}
          </Pie>
          <Legend />
        </PieChart>
     )
    }
  </div>  
);

PieChartData.propTypes = {
  responses: PropTypes.array.isRequired,
};

export default PieChartData;
