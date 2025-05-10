import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/patients/patientSlice';
import type { RootState } from '../redux/store';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { page, totalPatients, patientsPerPage } = useSelector(
    (state: RootState) => state.patients
  );

  // Calculate totalPages based on totalPatients and patientsPerPage
  const totalPages = Math.ceil(totalPatients / patientsPerPage);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="flex justify-center space-x-2 my-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className="px-4 py-2">{`Page ${page} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
