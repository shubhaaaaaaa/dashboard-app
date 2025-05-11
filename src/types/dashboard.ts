export interface Stat {
  title: string
  value: number
  icon?: string
}

export interface DepartmentVisit {
  dept: string
  count: number
}

export interface WeeklyVisit {
  day: string
  visits: number
}

export interface GenderDistribution {
  gender: string
  count: number
}