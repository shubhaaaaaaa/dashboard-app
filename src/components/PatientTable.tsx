import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePatientsTable } from '../hooks/usePatientsTable';

const PatientTable: React.FC = () => {
  const {
    sortedData,
    loading,
    error,
    page,
    totalPages,
    searchQuery,
    genderFilter,
    ageFilter,
    setSearchQuery,
    setGenderFilter,
    setAgeFilter,
    handleSort,
    handlePageChange,
  } = usePatientsTable();

  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-1/3"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label htmlFor="genderFilter" className="sr-only">
          Filter by Gender
        </label>
        <select
          id="genderFilter"
          className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-1/4"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="sr-only" htmlFor="ageFilter">
          Filter by Age
        </label>
        <select
          id="ageFilter"
          className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-1/4"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="all">All Ages</option>
          <option value="under20">Under 20</option>
          <option value="21to40">21-40</option>
          <option value="41to60">41-60</option>
          <option value="over60">Over 60</option>
        </select>

      </div>

      <div className="w-full overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('firstName')}>
                Name
              </th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('email')}>
                Email
              </th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('gender')}>
                Gender
              </th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('age')}>
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <Skeleton width={150} height={20} />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton width={200} height={20} />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton width={100} height={20} />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton width={50} height={20} />
                  </td>
                </tr>
              ))
            ) : (
              sortedData.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <Link to={`/patients/${patient.id}`} className="text-secondary hover:underline">
                      {`${patient.firstName} ${patient.lastName}`}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{patient.email}</td>
                  <td className="py-3 px-4">{patient.gender}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="p-2 rounded-full hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>

        <span className="text-sm text-gray-500">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="p-2 rounded-full hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PatientTable;
