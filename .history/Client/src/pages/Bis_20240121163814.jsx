// Bis.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import DragDropImageUploader from '../component/DragDropImageUploader';
import PlotResults from '../component/PlotResults';

export const Bis = () => {
  const [predictionResponse, setPredictionResponse] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);

  // Function to handle the prediction response
  const handlePredictionResponse = (response) => {
    setPredictionResponse(response);
    setForceUpdate((prev) => !prev); // Toggle the forceUpdate state
  };

  // Use useEffect to reset forceUpdate after render
  useEffect(() => {
    setForceUpdate(false);
  }, [forceUpdate]);

  return (
    <div className="w-full min-h-screen font-[poppins] relative">
      <div className="container relative z-10">
        <Navbar />
      </div>
      <div className="container relative z-10">
        <DragDropImageUploader onPredictionResponse={handlePredictionResponse} />
        {predictionResponse && predictionResponse.status === 200 && (
          <div className="relative">
            <PlotResults key={forceUpdate} response={predictionResponse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bis;
