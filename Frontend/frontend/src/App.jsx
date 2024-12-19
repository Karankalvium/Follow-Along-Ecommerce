import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './components/authorization/login.jsx';
import Signup from './components/authorization/signup.jsx';
import ProductEntryPage from './Pages/ProductEntryPage';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product-entry-page" element={<ProductEntryPage />} />
    </Routes>
  );
}

export default App;

