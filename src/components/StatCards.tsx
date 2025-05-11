import { ArrowTrendingUpIcon, UserIcon, CalendarIcon, HeartIcon } from "@heroicons/react/24/outline"; // Heroicons
import { Card } from "./ui/card";

// Dummy Data for Example
const statData = [
  { title: "Total Patients", value: 1200, icon: <UserIcon className="h-6 w-6 text-primary" /> },
  { title: "Today's Appointments", value: 50, icon: <CalendarIcon className="h-6 w-6 text-primary" /> },
  { title: "Admissions", value: 30, icon: <HeartIcon className="h-6 w-6 text-primary" /> },
  { title: "Discharges", value: 20, icon: <ArrowTrendingUpIcon className="h-6 w-6 text-primary" /> },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {statData.map((stat, index) => (
        <Card key={index} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md" title={""}>
          <div className="flex items-center gap-4">
            <div className="bg-muted p-4 rounded-xl">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">{stat.title}</h3>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
