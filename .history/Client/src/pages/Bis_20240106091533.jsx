import React, { useState, useEffect } from 'react';
import Navbar from "../component/Navbar";
import DragDropImageUploader from "../component/DragDropImageUploader";

export const Bis = () => {
  const [imageUrl, setImageUrl] = useState(null); // Store a single image URL

  useEffect(() => {
    // Fetch and convert TIFF image
    fetch('/convert-to-png', {
      method: 'POST',
      body: new File(["../src/assets/results.tif"], "results.tif") // Send local TIFF file
    })
      .then(response => response.blob())
      .then(pngBlob => {
        const url = URL.createObjectURL(pngBlob);
        setImageUrl(url); // Set the image URL state
      });
  }, []);

  return (
    <div className="w-full min-h-screen font-[poppins]">
      <div className="container">
        <Navbar />
      </div>
      <DragDropImageUploader />
      {imageUrl && <img src={imageUrl} />} {/* Render image if URL is available */}
    </div>
  );
};