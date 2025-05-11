import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Male', value: 45 },
  { name: 'Female', value: 50 },
  { name: 'Other', value: 5 }
];

const COLORS = ['#3A7D9A', '#A4D8E1', '#D4E4E9'];

const GenderPieChart = () => (
  <div className="bg-white p-4 rounded-2xl shadow-md">
    <h2 className="text-lg font-semibold mb-2 text-secondary">Gender Distribution</h2>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={60}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default GenderPieChart;
