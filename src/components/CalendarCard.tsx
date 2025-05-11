import { Calendar } from "./ui/calendar";

const CalendarCard = () => {
  return (
<div className="w-full h-full">
  <h2 className="text-xl font-semibold mb-4 text-secondary">Calendar</h2>
  <Calendar className="w-full max-w-none" />
</div>

  )
}

export default CalendarCard;

