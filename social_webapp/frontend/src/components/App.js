import React from 'react';
import HomePage from './HomePage';
import CreateCampaign from './CreateCampaign';
import UpdateCampaign from './UpdateCampaign';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HomePage />
      <Routes>
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/update/:id" element={<UpdateCampaign />} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
