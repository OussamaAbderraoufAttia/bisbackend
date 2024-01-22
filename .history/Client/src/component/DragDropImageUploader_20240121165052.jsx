// DragDropImageUploader.jsx
import React, { useState, useRef } from 'react';

function checkIfTif(fileName) {
  const extension = fileName.split('.').pop();
  return extension.toLowerCase() === 'tif';
}

function DragDropImageUploader() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [response, setResponse] = useState(null);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      const extension = files[i].name.split('.').pop();
      if (extension.toLowerCase() !== 'tif') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        const newImage = {
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        };
        setImages((prevImages) => [...prevImages, newImage]);
      }
    }
    setSelectedImage(files[0]);
  }

  function deleteImage(index) {
    setImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const extension = files[i].name.split('.').pop();
      if (extension.toLowerCase() !== 'tif') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
    setSelectedImage(files[0]);
  }

  function uploadImages() {
    if (selectedImage) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('image', selectedImage);

      fetch('http://127.0.0.1:3000/predict_image', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      })
        .then((response) => {
          const status = response.status;
          return response.json().then((data) => ({ status, data }));
        })
        .then(({ status, data }) => {
          console.log('Upload response:', data);

          // Display notification based on status
          setNotification({
            type: status === 200 ? 'success' : 'error',
            message: status === 200 ? data.message : `Error (${status}): ${data.message}`,
          });

          // Set the response data for further use
          setResponse({ status, data });
        })
        .catch((error) => {
          console.error('Upload error:', error);
          // Display a general error notification
          setNotification({
            type: 'error',
            message: 'An error occurred during the upload.',
          });
        })
        .finally(() => {
          setIsLoading(false);
          // Clear notification after 5 seconds
          setTimeout(() => setNotification(null), 5000);
        });
    } else {
      console.log('No image selected for upload');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#f5f5f5]">
      <div className="card p-4 shadow-lg rounded-md overflow-hidden min-w-[600px] bg-white">
        <div className="top text-center">
          <p className="font-semibold text-[#166873] text-lg">Drag & Drop Image Uploading </p>
        </div>
        <div
          className="drag-area h-36 p-2 rounded border-2 border-dashed
          border-[#2a8895] text-[#868585e5] bg-blue-gray-50 flex justify-center items-center select-none mt-2 bg-[#F7FDFF]"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
            <span className="select text-purple-800 ml-1 cursor-pointer transition duration-400  hover:opacity-60">
              {' '}
              Drag Drop Here{' '}
            </span>
          ) : (
            <>
              Drag & Drop Image or{' '}
              <span
                className="select text-[#2A8895] font-bold ml-1 cursor-pointer transition duration-400  hover:opacity-60"
                role="button"
                onClick={selectFiles}
              >
                Click Here
              </span>
            </>
          )}
          <input name="file" type="file" className="file hidden" multiple ref={fileInputRef} onChange={onFileSelect} />
        </div>
        <div className="container w-full h-auto flex justify-start items-start flex-wrap max-h-52 overflow-y-auto mt-2">
          {images.map((image, index) => (
            <div className="image w-20 mr-1 h-20 relative mb-2 p-2 rounded bg-blue-gray-50" key={index}>
              <span
                className="delete absolute top-[-3px] right-1 text-xl cursor-pointer z-[999]"
                onClick={() => deleteImage(index)}
              >
                &times;
              </span>
              <img src={image.url} alt={image.name} className="w-full h-full rounded" />
            </div>
          ))}
        </div>
        <button
          className={`button outline-none text-white rounded cursor-pointer font-semibold py-2 pr-3 pl-3 w-full ${
            isLoading ? 'bg-gray-400' : 'bg-[#2a8895]'
          } hover:text-[#2a8895] hover:border hover:border-[#44C0FF] hover:bg-white`}
          onClick={uploadImages}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">&#9696;</span> Loading...
            </>
          ) : (
            'Predict'
          )}
        </button>
        {notification && (
          <div
            className={`mt-4 py-2 px-4 rounded ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {notification.message}
          </div>
        )}
        
      </div>
    </div>
  );
}

export default DragDropImageUploader;
