import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import img1 from "../assets/10.svg";
import img2 from "../assets/11.svg";



export default function Diagnosis() {
  const [objet, setObjet] = useState([
    {
      id: 1,
      nom: "Meziani",
      prenom: " Fatima",
      genre: "Femme",
      maladie: "l'asthme",
      date: "02/01/2023",
    },
  
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen font-poppins">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="flex flex-col mt-20">
            {objet.map((o, index) => (
              <div key={index} className="flex flex-row mx-10 my-2 border-2 px-10 border-gray-300 rounded-lg h-30 ">
                    <img src={(`/${o.id}.png`)} className=" p-5 rounded-lg w-60" />
                    <div className="flex flex-col w-1/6 m-10">
                      <p className="text-custom-blue inline-block text-xl font-bold	">{o.nom} {o.prenom}</p>
                      <p className="text-gray-300	">{o.id}</p> 
                    </div>              
                    <p className="w-1/6 m-10 text-s">{o.genre}</p>
                    <p className="w-1/6 m-10 text-s">{o.maladie}</p>
                    <p className="w-1/6 m-10 text-s">{o.date}</p>
                    
               </div>

            ))}
       
        {/*upload */}
        <div className="flex flex-row mx-10 my-2 border-2 p-10 border-gray-300 rounded-lg ">
        <div className="flex flex-col w-2/5">
         <img src="/10.svg" className="" alt="Image" />
         <p>Image</p>
        </div>
       <div className="flex flex-col w-2/5">
         <img src="/11.svg" className="" alt="Output" />
         <p>Output</p>
        </div>
      </div>
      
<div className={`tab-container mx-10 my-10 gap-y-10 flex flex-col bg-white  border-2 border-gray-300  text-sm rounded-lg p-10 `}>
<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className='bg-custom-blue rounded-lg text-center text-white w-1/5	 h-10 font-bold border border-dark-purple pt-2  '> Tumeur </p>
   <p className='bg-white rounded-lg text-custom-blue w-4/5  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
</div>
<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className='bg-custom-blue rounded-lg text-center text-white w-1/5	 h-10 font-bold border border-dark-purple pt-2  '> Tumeur </p>
   <p className='bg-white rounded-lg text-custom-blue w-4/5  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
</div>

<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className='bg-custom-blue rounded-lg text-center text-white w-1/5	 h-10 font-bold border border-dark-purple pt-2  '> Tumeur </p>
    <div className="flex flex-row w-4/5 gap-x-16">
     <p className='bg-white rounded-lg text-custom-blue w-1/2  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
     <p className='bg-white rounded-lg text-custom-blue w-1/2  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
    </div>   
</div>
<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className=' w-1/5	 h-10  pt-2  '> </p>
    <div className="flex flex-row w-4/5 gap-x-16">
     <p className='bg-white rounded-lg text-custom-blue w-1/2  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
     <p className='bg-white rounded-lg text-custom-blue w-1/2  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
    </div>   
</div>

<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className='bg-custom-blue rounded-lg text-center text-white w-1/5	 h-10 font-bold border border-dark-purple pt-2  '> Tumeur </p>
   <p className='bg-white rounded-lg text-custom-blue w-4/5  h-10 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
</div>
<div className={`tab-container1 mx-4 mt-2 gap-x-16 flex flex-row  `}>
    <p className='bg-custom-blue rounded-lg text-center text-white w-1/5	 h-10 font-bold border border-dark-purple pt-2  '> Tumeur </p>
   <p className='bg-white rounded-lg text-custom-blue w-4/5  h-40 border border-custom-blue pl-4 pt-2 font-normal '> Tumeur detecté </p>
</div>

</div>
</div>   
       </div>
   </div>   
     
      
  );
}
