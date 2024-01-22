// PlotResults.jsx
import React from 'react';

function PlotResults({ response }) {
  // Extract necessary data from the response
  const { image_path, results_path, result, size, shape_properties } = response;

  return (
    <div className="border-2 border-dashed border-red-500 p-4 mt-4 rounded">
      {image_path && results_path ? (
        <>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="text-lg font-semibold">Input Image</p>
              <img src={process.env.PUBLIC_URL + image_path} alt="Input" className="w-full h-auto rounded" />
            </div>
            <div className="w-1/2">
              <p className="text-lg font-semibold">Result Image</p>
              <img src={process.env.PUBLIC_URL + results_path} alt="Result" className="w-full h-auto rounded" />
            </div>
          </div>
          {/* Additional labels or information can be added here */}
        </>
      ) : (
        <p className="text-red-500 font-semibold">Error predicting the image. Please try again!</p>
      )}
    </div>
  );
}

export default PlotResults;
