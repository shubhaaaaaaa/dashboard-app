import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Patient interface definition
export interface Patient {
  createdAt: string | number | Date;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
}

// Redux state structure
interface PatientState {
  data: Patient[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPatients: number; // Total number of patients
  patientsPerPage: number; 
}

// Initial state
const initialState: PatientState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  totalPatients: 0,
  patientsPerPage: 10,
};

// Async thunk to fetch patients with total number of patients (totalPatients)
export const getPatients = createAsyncThunk<
  { patients: Patient[]; totalPatients: number }, // Return both patients and totalPatients
  number // The page number to fetch
>(
  'patients/getPatients',
  async (page, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/users?page=${page}&limit=10`);
      const data = await response.json();
      return { patients: data.users, totalPatients: data.total }; // Assuming API returns 'total' field
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to load patient data');
    }
  }
);

// Create slice
const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    // setPage reducer to update the page state
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.patients;
        state.totalPatients = action.payload.totalPatients; // Set the total number of patients
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the setPage action to use it in the component
export const { setPage } = patientSlice.actions;

export default patientSlice.reducer;
