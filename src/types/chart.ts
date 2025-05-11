export interface WeeklyVisit {
  day: string;
  count: number;
}

export interface GenderStats {
  male: number;
  female: number;
  other: number;
}

export interface DepartmentStats {
  dept: string;
  count: number;
}

export interface HighlightStat {
  label: string;
  value: string;
}

export interface Appointment {
  date: string;
  title: string;
}