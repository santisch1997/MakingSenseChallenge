// src/components/Chart.jsx
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { GraphContainer } from './Chart.styles';


const Chart = ({ data }) => {
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="name2" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="New Followers" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default Chart;
