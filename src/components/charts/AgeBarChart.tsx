// src/components/AgeBarChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const AgeBarChart = () => {
    const { data } = useSelector((state: RootState) => state.patients);
  
    // Type the accumulator with index signature to allow dynamic string keys
    const ageData: { [key: string]: number } = data.reduce((acc, patient) => {
      const ageGroup = Math.floor(patient.age / 10) * 10; // group ages by decade
      acc[ageGroup] = (acc[ageGroup] || 0) + 1; // increment count for the age group
      return acc;
    }, {} as { [key: string]: number });
  
    const formattedData = Object.keys(ageData).map((ageGroup) => ({
      ageGroup: `${ageGroup}-${parseInt(ageGroup) + 9}`,
      count: ageData[ageGroup],
    }));
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ageGroup" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#1766DE" />
        </BarChart>
      </ResponsiveContainer>
    );
  };  

export default AgeBarChart;
