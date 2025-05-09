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
}

// Initial state
const initialState: PatientState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
};

// Async thunk to fetch patients
export const getPatients = createAsyncThunk<Patient[], number>(
  'patients/getPatients',
  async (page, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/users?page=${page}&limit=10`);
      const data = await response.json();
      return data.users;
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
        state.data = action.payload;
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
