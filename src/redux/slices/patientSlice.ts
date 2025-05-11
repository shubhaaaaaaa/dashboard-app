import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { type GetPatientsResponse, type GetPatientsArg, patientInitialState, } from '../../types/patientTypes';

export const getPatients = createAsyncThunk<GetPatientsResponse, GetPatientsArg>(
  'patients/getPatients',
  async (page, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/users?page=${page}&limit=10`);
      const data = await response.json();
      return { patients: data.users, totalPatients: data.total };
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to load patient data');
    }
  }
);

const patientSlice = createSlice({
  name: 'patients',
  initialState: patientInitialState,
  reducers: {
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
        state.totalPatients = action.payload.totalPatients;
      })
      .addCase(getPatients.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load patients';
      });
  },
});

export const { setPage } = patientSlice.actions;
export default patientSlice.reducer;
