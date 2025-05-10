import type { Patient, SortKey } from '../types/patientTypes';

export const sortPatients = (
  patients: Patient[],
  sortConfig: { key: SortKey; direction: 'asc' | 'desc' }
) => {
  return [...patients].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });
};
