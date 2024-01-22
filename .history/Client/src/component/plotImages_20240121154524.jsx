// PlotResults.jsx

import React from 'react';

const PlotResults = ({ inputImageURL, resultImageURL }) => {
  return (
    <div className="mt-4 border-dashed border-2 border-[#2a8895] p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-[#166873] text-lg">Input Image</p>
        <p className="font-semibold text-[#166873] text-lg">Result Image</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={inputImageURL} alt="Input" className="w-32 h-32 rounded mb-2" />
          <p className="text-[#166873]">Input Image</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={resultImageURL} alt="Result" className="w-32 h-32 rounded mb-2" />
          <p className="text-[#166873]">Result Image</p>
        </div>
      </div>
    </div>
  );
};

export default PlotResults;
