// Bis.jsx
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import DragDropImageUploader from '../component/DragDropImageUploader';
import PlotResults from '../component/PlotResults';

export const Bis = () => {
  const [predictionResponse, setPredictionResponse] = useState(null);

  // Function to handle the prediction response
  const handlePredictionResponse = (response) => {
    setPredictionResponse(response);
  };

  return (
    <div className="w-full min-h-screen font-[poppins] relative">
      <div className="container relative z-10">
        <Navbar />
      </div>
      <DragDropImageUploader onPredictionResponse={handlePredictionResponse} />
      {predictionResponse && predictionResponse.status === 200 && (
        <div className="relative">
          <PlotResults response={predictionResponse} />
        </div>
      )}
    </div>
  );
};

export default Bis;
