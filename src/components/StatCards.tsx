import { ArrowTrendingUpIcon, UserIcon, CalendarIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Card } from "./ui/card";
import statData from "../data/data.json";
import type { StatData } from "../types/chart"; 
import type { JSX } from "react";

const iconMap: { [key: string]: JSX.Element } = {
  "UserIcon": <UserIcon className="h-6 w-6 text-secondary" />,
  "CalendarIcon": <CalendarIcon className="h-6 w-6 text-secondary" />,
  "HeartIcon": <HeartIcon className="h-6 w-6 text-secondary" />,
  "ArrowTrendingUpIcon": <ArrowTrendingUpIcon className="h-6 w-6 text-secondary" />
};

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {statData.statData.map((stat: StatData, index: number) => (
        <Card key={index} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md" title={""}>
          <div className="flex items-center gap-4">
            <div className="bg-muted p-4 rounded-xl">{iconMap[stat.icon]}</div>
            <div>
              <p className="text-lg font-semibold text-secondary">{stat.title}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
