import DepartmentBarChart from "../components/BarChart";
import CalendarCard from "../components/CalendarCard";
import WeeklyVisitsChart from "../components/LineChart";
import PatientTable from "../components/PatientTable";
import GenderPieChart from "../components/PieChart";
import StatCards from "../components/StatCards";
import StatisticsCard from "../components/StatisticsCard";

const Dashboard = () => {
  return (
    <div className="p-6 bg-background min-h-screen space-y-8">
      <StatCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeeklyVisitsChart />
        <GenderPieChart />
      </div>

      <PatientTable />
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <DepartmentBarChart />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-1 lg:col-span-1">
      <div className="w-full h-full overflow-hidden">
        <div className="h-full w-full overflow-auto">
          <CalendarCard />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6">
      <div>
        <StatisticsCard />
      </div>
      <div>
        <StatisticsCard />
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Dashboard;