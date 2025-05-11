import type { ReactNode } from "react";

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

export interface StatData {
  title: string;
  value: number;
  icon: string;
}

export interface GenderData  {
  name: string;
  value: number;
};

export interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export interface Statistic {
  title: string;
  value: number;
  icon: string;
}

export interface Data {
  statistics: Statistic[];
}