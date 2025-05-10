import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients, setPage } from '../redux/slices/patientSlice';
import type { RootState, AppDispatch } from '../redux/store';
import { filterPatients } from '../utils/filterPatients';
import { sortPatients } from '../utils/sortPatients';
import type { SortKey } from '../types/patientTypes';

export const usePatientsTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error, page, totalPatients, patientsPerPage } = useSelector(
        (state: RootState) => state.patients
    );

    const [searchQuery, setSearchQuery] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [ageFilter, setAgeFilter] = useState('all');

    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' }>({
        key: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        dispatch(getPatients(page));
    }, [dispatch, page]);

    const filters = { searchQuery, genderFilter, ageFilter };
    const filteredData = filterPatients(data, filters);
    const sortedData = sortPatients(filteredData, sortConfig);
    const totalPages = Math.ceil(totalPatients / patientsPerPage);

    const handleSort = (key: SortKey) => {
        setSortConfig((prev) =>
            prev.key === key
                ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
                : { key, direction: 'asc' }
        );
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) dispatch(setPage(newPage));
    };

    return {
        sortedData,
        loading,
        error,
        page,
        totalPages,
        handleSort,
        sortConfig,
        searchQuery,
        setSearchQuery,
        genderFilter,
        setGenderFilter,
        ageFilter,
        setAgeFilter,
        handlePageChange,
    };
};
