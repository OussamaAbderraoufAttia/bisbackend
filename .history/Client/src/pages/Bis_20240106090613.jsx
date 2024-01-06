import React, { useState, useRef, useEffect } from 'react';
import Navbar from "../component/Navbar";
import DragDropImageUploader from "../component/DragDropImageUploader";
import Results from "../assets/results.tif"; // Adjust the path accordingly

export const Bis = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch and convert TIFF image
    fetch('/convert-to-png', {
      method: 'POST',
      body: new File(["Client/src/assets/results.tif"], "results.tif") // Send local TIFF file
    })
      .then(response => response.blob())
      .then(pngBlob => {
        const url = URL.createObjectURL(pngBlob);
        setImages([{ blobURL: url }]); // Set state with PNG URL
      });
  }, []);
  return (
    <div className="w-full min-h-screen font-[poppins]">
      <div className="container">
        <Navbar />
      </div>
      <DragDropImageUploader />
      <image src={images[0]?.blobURL} /> {/* Render PNG image */}
    </div>
  );
};
