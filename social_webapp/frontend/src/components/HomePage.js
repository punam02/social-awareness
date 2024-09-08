import React from 'react';
import Header from './HeaderComponent';
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
          
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
