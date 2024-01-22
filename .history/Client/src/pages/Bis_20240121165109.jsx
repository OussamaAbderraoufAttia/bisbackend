// Bis.jsx
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import DragDropImageUploader from '../component/DragDropImageUploader';
import PlotResults from '../component/PlotResults';

export const Bis = () => {
  const [predictionResponse, setPredictionResponse] = useState(null);
  const [plotResultsKey, setPlotResultsKey] = useState(Date.now()); // Use timestamp as the initial key

  // Function to handle the prediction response
  const handlePredictionResponse = (response) => {
    setPredictionResponse(response);
    setPlotResultsKey(Date.now()); // Update key with a new timestamp
  };

  return (
    <div className="w-full min-h-screen font-[poppins] relative">
      <div className="container relative z-10">
        <Navbar />
      </div>
      <div className="container relative z-10">
        <DragDropImageUploader onPredictionResponse={handlePredictionResponse} />
        {predictionResponse && predictionResponse.status === 200 && (
          <div className="relative">
            <PlotResults key={plotResultsKey} response={predictionResponse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bis;
