import React from 'react';
import Header from './HeaderComponent';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function HomePage() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
          {/* Define routes using 'element' */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* Redirect from base path to /login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
