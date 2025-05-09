import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type KpiCardProps = {
  title: string;
  value: string | number;
};

const KpiCard = ({ title, value }: KpiCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

export default KpiCard;
