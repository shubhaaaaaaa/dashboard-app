import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { patientsByGender } from "../data/data.json";

const GenderPieChart = () => (
  <div className="bg-white p-4 rounded-2xl shadow-md">
    <h2 className="text-lg font-semibold mb-2 text-secondary">Gender Distribution</h2>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={patientsByGender} dataKey="value" nameKey="name" outerRadius={60}>
          {patientsByGender.map((_entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={index === 0 ? '#3A7D9A' : index === 1 ? '#A4D8E1' : '#D4E4E9'} 
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default GenderPieChart;
