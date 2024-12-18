import React from 'react'
import Login from './components/authorization/login.jsx'
import Signup from './components/authorization/signup.jsx'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    // <div><Signup /></div>
    <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;