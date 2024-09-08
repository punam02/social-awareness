import React from 'react';
import Header from './HeaderComponent';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CampaignsList from './CampaignList';

function HomePage() {
  return (

    <div>
      <Header />
      <CampaignsList />
    </div>

  );
}

export default HomePage;
