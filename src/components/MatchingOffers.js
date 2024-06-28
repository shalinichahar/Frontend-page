// src/components/MatchingOffers.js

import React from 'react';

const MatchingOffers = () => {
  return (
    <div className="flex flex-col space-y-4 p-6 mr-5 border rounded-lg shadow-md bg-blue-50 max-w-md">
      <div className="text-lg font-bold text-blue-600">Finance Buddha</div>
      <div className="text-xl font-semibold mb-4">We found some matching offers for you!</div>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="font-semibold">Prefr</div>
          <img src="/prefr_logo.png" alt="Prefr Logo" className="h-6" />
        </div>
        <div className="text-lg bg-green-100 p-1 rounded-md text-center mb-2">Loan upto 5 Lakh in 5 minutes!</div>
        <ul className="list-none mt-2 space-y-1">
          <li className="flex items-center"><span className="mr-2 text-blue-500">📱</span><span className="font-bold">100% paperless</span><span className="ml-1">approval</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">⚡</span><span className="font-bold">Fast Forward</span><span className="ml-1"> Journey- Apply in 3 steps</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">🚀</span><span className="font-bold">Same Day </span><span className="ml-1"> Disbursal</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">Chances of Approval:</span><span className="text-green-600 font-semibold bg-green-100 p-1 rounded ml-1">Excellent</span></li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center">Apply Now <span className="ml-2">≫</span></button>
        <div className="text-xs text-gray-500 mt-2 p-3 pt-1 mb-0 pb-0">
          I agree to <span className="text-blue-600">Prefr's T&C</span> and <span className="text-blue-600">Privacy Policy</span>, consent to CKYC 
        </div>
        <div className='text-xs text-gray-500 mt-0 pr-3 pl-3 pt-1 m-4'>
        and <span className="text-blue-600">authorize</span> Prefr to retrieve my credit report
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="font-semibold">Tata Capital</div>
          <img src="/tata_capital_logo.png" alt="Tata Capital Logo" className="h-6" />
        </div>
        <ul className="list-none mt-2 space-y-1">
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">Interest Rate:</span><span className="ml-1">15.49%</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">EMI:</span><span className="ml-1">₹4,872</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">Chances of Approval:</span><span className="text-green-600 font-semibold bg-green-100 p-1 rounded ml-1">Excellent</span></li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center">Apply Now <span className="ml-2">≫</span></button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="font-semibold">Tata Capital</div>
          <img src="/tata_capital_logo.png" alt="Tata Capital Logo" className="h-6" />
        </div>
        <ul className="list-none mt-2 space-y-1">
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">Interest Rate:</span><span className="ml-1">15.49%</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">EMI:</span><span className="ml-1">₹4,872</span></li>
          <li className="flex items-center"><span className="mr-2 text-blue-500">✔️</span><span className="font-bold">Chances of Approval:</span><span className="text-green-600 font-semibold bg-green-100 p-1 rounded ml-1">Excellent</span></li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center">Apply Now <span className="ml-2">≫</span></button>
      </div>
    </div>
  );
};

export default MatchingOffers;
