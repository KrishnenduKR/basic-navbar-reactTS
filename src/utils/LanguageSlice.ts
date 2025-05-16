// features/languageSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLanguages = createAsyncThunk(
  'language/fetchLanguages',
  async () => {
    const res = await axios.get('http://localhost:5000/api/languages');
    return res.data;
  }
);

type LanguageState = {
  data: Record<string, string>;
  loading: boolean;
};

const initialState: LanguageState = {
  data: {},
  loading: true,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log(state.data);
        state.loading = false;
      })
      .addCase(fetchLanguages.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default languageSlice.reducer;
