import KpiCard from "../components/KpiCard";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import AgeBarChart from "../components/charts/AgeBarChart";
import GenderPieChart from "../components/charts/GenderPieChart";
import PatientGrowthLineChart from "../components/charts/PatientGrowthLineChart";

const Dashboard = () => {
  const { data } = useSelector((state: RootState) => state.patients);

  const total = data.length;
  const avgAge = total ? Math.round(data.reduce((a, p) => a + p.age, 0) / total) : 0;
  const males = data.filter(p => p.gender === "male").length;
  const females = data.filter(p => p.gender === "female").length;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Total Patients" value={total} />
        <KpiCard title="Average Age" value={avgAge} />
        <KpiCard title="Males" value={males} />
        <KpiCard title="Females" value={females} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gender Distribution</h2>
          <GenderPieChart /> {/* Gender Pie Chart */}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Age Distribution</h2>
          <AgeBarChart /> {/* Age Bar Chart */}
        </div>
      </div>

      {/* Patient Growth Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Patient Growth Over Time</h2>
        <PatientGrowthLineChart /> {/* Patient Growth Line Chart */}
      </div>
    </div>
  );
};

export default Dashboard;
