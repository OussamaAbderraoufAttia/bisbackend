import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar"
import addIcon from "../assets/add.svg";
import sortIcon from "../assets/Sort.svg";
import Patientdis from "../component/patientdis";
import arhiveIcon from "../assets/arhive.svg";

import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";

export default function AddPatient() {
  
 
   const[patient,setPatient]=useState('');
   const navigate = useNavigate();

   const HandleAddpatient = () => {
       navigate('/Addpatient' );
   };
  return (
    <div className=" flex flex-col w-full min-h-screen font-[poppins] my-5">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="w-full">
          <h2 className="mx-10 my-10 text-custom-blue text-3xl font-extrabold ">
            Listes des patients
          </h2>

          <div className=" flex flex-row items-center space-x-4 mx-10">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-4/5 p-4 h-10 rounded-2xl ps-10 text-sm text-gray-900 border border-gray-200 bg-gray-50 "
                placeholder="Rechercher le patient ici"
                value={patient} onChange={(e) => setprenom(e.target.value)}
                required
              />
            </div>


            <button onClick={HandleAddpatient} className="mr-4 flex items-center text-white bg-custom-blue rounded-lg border border-white h-10 px-3">
              <img src={addIcon} alt="Add Icon" className="w-5 h-5 mr-2" />
              Ajouter un nouveau patient
            </button>
         
            

            <button className="mr-4 flex items-center text-custom-blue bg-gray-200 rounded-lg border border-white h-10 px-3">
              <img src={sortIcon} alt="Sort Icon" className="w-5 h-5 mr-2" />
              Filtrer
            </button>
          </div>
          <Patientdis/>
          
        </div>
      </div>
    </div>
  )
}