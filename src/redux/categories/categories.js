import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.push('Under Construction');
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
