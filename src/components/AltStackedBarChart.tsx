import React, { useEffect } from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis,  YAxis, Tooltip, Legend, Bar, Cell } from 'recharts';


const data = [
    { name: '1-4', value1: 0, value2: 0, value3: 0, value4:0, },
    { name: '4-8', value1: 0, value2: 0, value3: 0, value4: 0 },
    { name: '9-15', value1: 86, value2: 0, value3: 0, value4:0  },
    { name: '16-21', value1: 50000, value2: 50000, value3: 50000 },
    { name: '21-25', value1: 120000, value2: 30000, value3: 30000, value4: 30000 },
];

const AltStackedBarChart = () => {
    useEffect(() => {
      
    
      return () => {
      }
    }, [])
    
  return (
      <ResponsiveContainer width="100%" height={200}>
          <BarChart barSize={42} barGap={33} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#313131" vertical={false} strokeDasharray="4 3" />
              <XAxis dataKey="name" />
              <YAxis ticks={[0, 150000, 300000]} tickFormatter={(value) => `${value / 1000}k`} orientation='right' />
              
              <Bar width={31} dataKey="value1" stackId="a" fill="#FF8A08" />
              <Bar width={31} dataKey="value2" stackId="a" fill="#ADF4B5" />
              <Bar width={31} dataKey="value3" stackId="a" fill="#30E3DF" />
              <Bar radius={[4,4,0,0]} width={31} dataKey="value4" stackId="a" fill="#8576FF" />
              
          </BarChart>
      </ResponsiveContainer>
  )
}

export default AltStackedBarChart