import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CategoriesPage from './components/CategoriesPage';
import BookPage from './components/BookPage';

function App() {
  return (
    <div className="app-container flex">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
