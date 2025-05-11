import { Card,  CardHeader,  CardTitle, CardContent } from "./ui/card";

interface StatisticsCardProps {
  title?: string;
  value?: string | number;
  icon?: React.ReactNode;
}

export default function StatisticsCard({
  title = "Total Patients",
  value = "1,245",
  icon,
}: StatisticsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
