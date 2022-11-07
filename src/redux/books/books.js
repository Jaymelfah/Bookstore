import { createSlice } from '@reduxjs/toolkit';

// initialize with an empty state
const initialState = [];

// createslice method combines reducers and actions into a single object
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
