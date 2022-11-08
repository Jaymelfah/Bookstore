import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
