export interface Patient {
  createdAt: string | number | Date;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
}

export type SortKey = 'firstName' | 'lastName' | 'email' | 'gender' | 'age';

export interface PatientState {
  data: Patient[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPatients: number;
  patientsPerPage: number;
}

export const patientInitialState: PatientState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  totalPatients: 0,
  patientsPerPage: 10,
};

export type GetPatientsResponse = {
  patients: Patient[];
  totalPatients: number;
};

export type GetPatientsArg = number;