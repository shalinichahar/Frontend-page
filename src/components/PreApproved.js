// src/components/PreApprovedLoan.js

import React from 'react';

const PreApprovedLoan = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center max-w-md">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-lg font-bold text-blue-600">Finance Buddha</div>
        <img src="/prefr_logo.png" alt="Prefr Logo" className="h-6" />
      </div>
      <div className="bg-blue-50 p-4 rounded-lg w-full text-center mb-4">
        <div className="text-xl font-semibold text-blue-600 mb-2">Congratulations Ramamurthy!</div>
        <div className="flex justify-between items-center">
          <div className="text-sm pr-6">
            Get loan upto: <span className="font-bold">₹2,00,000</span>
          </div>
          <div className="text-sm pl-6">
            At interest rate: <span className="font-bold">1.22% per month</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <div className="text-md text-blue-600 mb-2">Get your loan in 3 easy steps:</div>
        <ul className="list-none text-left mt-2 space-y-2">
          <li className="flex items-center ml-3">
            <span className="mr-2">🖱</span>Select Offer
          </li>
          <li className="flex items-center ml-3">
            <span className="mr-2">📄</span>Complete KYC
          </li>
          <li className="flex items-center ml-3">
            <span className="mr-2">🏦</span>Enter Bank Details
          </li>
        </ul>
      </div>
      <div className="mt-4 bg-green-100 p-4  rounded-lg w-full text-center flex justify-between items-center">
        <span>You are pre-approved for this personal loan</span>
        <img src="/celebration_icon.png" alt="Celebration Icon" className="h-6 ml-2"/>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center">
        Continue to application <span className="ml-2">≫</span>
      </button>
      <div className="mt-2 text-gray-500 text-sm text-center">Auto redirect in 10 seconds...</div>
    </div>
  );
};

export default PreApprovedLoan;
