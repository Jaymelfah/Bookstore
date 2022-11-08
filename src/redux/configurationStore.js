import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const reducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
