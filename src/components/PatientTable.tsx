import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../features/patients/patientSlice';
import type { RootState, AppDispatch } from '../redux/store';
import { Link } from 'react-router-dom';

const PatientTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, page, totalPages } = useSelector(
    (state: RootState) => state.patients
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [ageFilter, setAgeFilter] = useState<string>('all');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string }>({
    key: 'firstName',
    direction: 'asc',
  });

  // Fetch patients whenever page or sortConfig changes
  useEffect(() => {
    dispatch(getPatients(page));
  }, [dispatch, page]);

  // Filter data based on search query, gender filter, and age filter
  const filteredData = data.filter((patient) => {
    const matchesSearch =
      `${patient.firstName} ${patient.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenderFilter =
      genderFilter === 'all' || patient.gender.toLowerCase() === genderFilter.toLowerCase();

    const matchesAgeFilter =
      ageFilter === 'all' ||
      (ageFilter === 'under20' && patient.age < 20) ||
      (ageFilter === '21to40' && patient.age >= 21 && patient.age <= 40) ||
      (ageFilter === '41to60' && patient.age >= 41 && patient.age <= 60) ||
      (ageFilter === 'over60' && patient.age > 60);

    return matchesSearch && matchesGenderFilter && matchesAgeFilter;
  });

  // Sort filtered data based on sortConfig
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.key === key) {
        return {
          key,
          direction: prevConfig.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const handlePageChange = (newPage: number) => {
    // You can dispatch an action to update the page number in your state
    // Example: dispatch(setPage(newPage));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Search bar, Filter Dropdowns (Gender and Age) */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          className="border px-4 py-2 w-1/3"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Gender Filter Dropdown */}
        <select
          className="border px-4 py-2 w-1/4"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Age Filter Dropdown */}
        <select
          className="border px-4 py-2 w-1/4"
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

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th
              className="border px-4 py-2 cursor-pointer"
              onClick={() => handleSort('firstName')}
            >
              Name
            </th>
            <th
              className="border px-4 py-2 cursor-pointer"
              onClick={() => handleSort('email')}
            >
              Email
            </th>
            <th
              className="border px-4 py-2 cursor-pointer"
              onClick={() => handleSort('gender')}
            >
              Gender
            </th>
            <th
              className="border px-4 py-2 cursor-pointer"
              onClick={() => handleSort('age')}
            >
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((patient) => (
            <tr key={patient.id}>
              <td className="border px-4 py-2">
                <Link to={`/patients/${patient.id}`} className="text-blue-600 underline">
                  {`${patient.firstName} ${patient.lastName}`}
                </Link>
              </td>
              <td className="border px-4 py-2">{patient.email}</td>
              <td className="border px-4 py-2">{patient.gender}</td>
              <td className="border px-4 py-2">{patient.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PatientTable;
