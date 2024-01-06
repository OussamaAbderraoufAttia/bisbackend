import Navbar from "../component/Navbar"
import DragDropImageUploader from "../component/DragDropImageUploader";

export const Bis = () => {
  return (
    <div className=" w-full min-h-screen font-[poppins]">
     <div className="container">
            <Navbar />
        </div>
        <DragDropImageUploader />
    </div>
    
  )
}
