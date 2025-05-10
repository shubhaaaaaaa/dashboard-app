import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../features/patients/patientSlice';
import type { RootState, AppDispatch } from '../redux/store';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

type SortKey = 'firstName' | 'lastName' | 'email' | 'gender' | 'age';

const PatientTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, page  } = useSelector(
    (state: RootState) => state.patients
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [ageFilter, setAgeFilter] = useState<string>('all');

  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: 'asc' | 'desc';
  }>({
    key: 'firstName',
    direction: 'asc',
  });

  useEffect(() => {
    dispatch(getPatients(page));
  }, [dispatch, page]);

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

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
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

  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-1/3"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-1/4"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
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

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('firstName')}>Name</th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('email')}>Email</th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('gender')}>Gender</th>
              <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('age')}>Age</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <Link to={`/patients/${patient.id}`} className="text-blue-600 hover:underline">
                    {`${patient.firstName} ${patient.lastName}`}
                  </Link>
                </td>
                <td className="py-3 px-4">{patient.email}</td>
                <td className="py-3 px-4">{patient.gender}</td>
                <td className="py-3 px-4">{patient.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;
