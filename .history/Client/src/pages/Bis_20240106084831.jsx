import Navbar from "../component/Navbar";
import DragDropImageUploader from "../component/DragDropImageUploader";
import Results from "../assets/results.tif"; // Adjust the path accordingly

export const Bis = () => {
  return (
    <div className="w-full min-h-screen font-[poppins]">
      <div className="container">
        <Navbar />
      </div>
      <DragDropImageUploader />
      <DisplayResultImage /> {/* Display the result image */}
    </div>
  );
};
