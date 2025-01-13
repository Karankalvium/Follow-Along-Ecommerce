import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './components/authorization/login.jsx';
import Signup from './components/authorization/signup.jsx';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm.jsx';
import Navbar from './components/NavBar/NavBar.jsx';


function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product-entry-page" element={<ProductEntryPage />} />
      <Route path="/update-form/:id" element={<UpdateForm />}/>

    </Routes>
    </div>
  );
  
}

export default App;

