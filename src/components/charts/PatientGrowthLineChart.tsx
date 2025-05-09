// src/components/PatientGrowthLineChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const PatientGrowthLineChart = () => {
  const { data } = useSelector((state: RootState) => state.patients);

  const patientGrowth = data.map((patient, index) => ({
    name: `Month ${index + 1}`,
    patients: patient.id, // Assuming `id` is unique and represents patient data for this example
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={patientGrowth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="patients" stroke="#1766DE" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PatientGrowthLineChart;
