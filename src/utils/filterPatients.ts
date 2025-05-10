import type { Patient } from '../types/patientTypes';
import type { Filters } from '../types/utils';

export const filterPatients = (patients: Patient[], filters: Filters): Patient[] => {
  const { searchQuery, genderFilter, ageFilter } = filters;

  const result = patients.filter((patient) => {
    const matchesSearch =
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGender =
      genderFilter === 'all' || patient.gender.toLowerCase() === genderFilter.toLowerCase();

    const matchesAge =
      ageFilter === 'all' ||
      (ageFilter === 'under20' && patient.age < 20) ||
      (ageFilter === '21to40' && patient.age >= 21 && patient.age <= 40) ||
      (ageFilter === '41to60' && patient.age >= 41 && patient.age <= 60) ||
      (ageFilter === 'over60' && patient.age > 60);

    return matchesSearch && matchesGender && matchesAge;
  });

  return result;
};
