import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { UserIcon } from "@heroicons/react/24/outline"; 
import statisticsData from "../data/data.json";
import type { Data } from "../types/chart";

export default function StatisticsCard() {
  const statistics = (statisticsData as Data).statistics;
  const stat = statistics[0]; 

  return (
    <Card className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-md rounded-lg p-4">
      <CardHeader className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-white text-primary">
            <UserIcon className="w-6 h-6" />
          </div>
          <CardTitle className="text-base font-medium text-white">{stat.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="text-2xl font-semibold">{stat.value}</div>
      </CardContent>
    </Card>
  );
}
