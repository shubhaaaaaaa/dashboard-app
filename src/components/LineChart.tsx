import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import weeklyVisitsData from "../data/data.json"; 

const WeeklyVisitsChart = () => (
  <div className="bg-white p-4 rounded-2xl shadow-md">
    <h2 className="text-lg font-semibold mb-2 text-secondary">Weekly Patient Visits</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={weeklyVisitsData.appointmentsPerDay}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="patients" stroke="#3A7D9A" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyVisitsChart;
