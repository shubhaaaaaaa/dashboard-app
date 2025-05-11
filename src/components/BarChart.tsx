import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import departmentData from '../data/data.json';

const DepartmentBarChart = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-secondary">Visits by Department</h2>
    
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={departmentData.departmentData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
        <XAxis dataKey="dept" tick={{ fill: "#3A7D9A", fontSize: 14 }} />
        <YAxis tick={{ fill: "#3A7D9A", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#A4D8E1", borderRadius: 10 }} itemStyle={{ color: "#fff" }} />
        <Legend />
        <Bar
          dataKey="count"
          fill="#3A7D9A"
          barSize={30}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DepartmentBarChart;
