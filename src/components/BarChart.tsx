import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
  { dept: 'Cardiology', count: 40 },
  { dept: 'Neurology', count: 25 },
  { dept: 'Orthopedics', count: 30 },
  { dept: 'General', count: 50 },
];

const DepartmentBarChart = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <h2 className="text-xl font-semibold mb-4 text-secondary">Visits by Department</h2>
    
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="dept" tick={{ fill: "#3A7D9A", fontSize: 14 }} />
        <YAxis tick={{ fill: "#3A7D9A", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#3A7D9A", borderRadius: 10 }} itemStyle={{ color: "#fff" }} />
        <Legend />
        <Bar dataKey="count" fill="#7FA7E1" barSize={30} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DepartmentBarChart;
