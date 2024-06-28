// src/app/page.js

import React from 'react';
import MatchingOffers from '../components/MatchingOffers';
import PreApprovedLoan from '../components/PreApproved';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-lg">
        <MatchingOffers />
        <PreApprovedLoan />
      </div>
    </div>
  );
};

export default HomePage;
