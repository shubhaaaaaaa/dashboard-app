import React from 'react';
import PatientTable from '../components/PatientTable';
import Pagination from '../components/Pagination';

const Patients: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Patients</h1>
      <PatientTable />
      <Pagination />
    </div>
  );
};

export default Patients;
