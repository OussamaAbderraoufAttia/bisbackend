
import { useState } from "react"

export default function Rendezvouscard() {
    const[object,setobject]=useState([
        {
            name: "attia Oussama",
            id: 1,
            time:"14:00",
            date:"14/06/2002",

        },
        {
            name: "djellale amina",
            id: 2,
            time:"14:00",
            date:"03/03/2002",

        },
        {
            name: "Rezzoug amira",
            id: 3,
            time:"14:00",
            date:"15/01/2002",

        },
        {
            name: "Zitouni rania",
            id: 4,
            time:"14:00",
            date:"25/09/2002",

        },
     ]);
  return (
    <div className="border-2 border-gray-300  p-5 m-5 rounded-lg flex flex-col w-1/2">
         <p className="mx-5 my-1 text-custom-blue text-2xl text-extrabold p-4 ">Prochains rendez-vous</p>
         <div className="flex flex-row mx-10 my-2">
            <p className="text-s text-gray-300 flex-grow  p-2 w-1/3">Full name</p>
            <p className="text-s text-gray-300 flex-grow  p-2 w-1/4">ID</p>
            <p className="text-s text-gray-300 flex-grow  p-2 w-1/4">Time</p>
            <p className="text-s text-gray-300 flex-grow  p-2 w-1/4">Date</p>
         </div>
         {object.map((e,index) => (
            <div className="flex flex-row mx-10 my-2 bg-[#EEEEEE]" key={index}>
            <p className="text-s text-[#222222] flex-grow p-2 rounded-lg w-1/3" >{e.name}</p>
            <p className="text-s text-[#222222]  flex-grow p-2 rounded-lg w-1/4">{e.id}</p>
            <p className="text-s text-[#222222]  flex-grow p-2 rounded-lg w-1/4">{e.time}</p>
            <p className="text-s text-[#222222]  flex-grow p-2 rounded-lg w-1/4">{e.date}</p>
            </div>
         ))
         }
       </div>
  )
}

