// src/components/GenderPieChart.tsx
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const GenderPieChart = () => {
  const { data } = useSelector((state: RootState) => state.patients);

  const males = data.filter(p => p.gender === 'male').length;
  const females = data.filter(p => p.gender === 'female').length;

  const dataPie = [
    { name: 'Males', value: males },
    { name: 'Females', value: females },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={dataPie} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
        <Cell fill="#1766DE" />
        <Cell fill="#F56C6C" />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default GenderPieChart;
