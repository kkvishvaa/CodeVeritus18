// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SelectUsers from './components/SelectUsers';
import Results from './components/Results';
import LoginPage from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Create this file to import custom styles if needed

const App = () => {
  return (
   
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/selectusers" element={<SelectUsers />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;