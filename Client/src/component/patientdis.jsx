
import { useState } from "react"
import iconplus from "../assets/icon-plus.svg"

export default function Patientdis() {
    const [objet, setObjet] = useState([
        {
          id: 1,
          nom: "Meziani",
          prenom: " Fatima",
          genre: "Femme",
          maladie: "l'asthme",
          date: "02/01/2023",
        },
        {
          id: 2,
          nom: "Djebbar",
          prenom: " Feriel",
          genre: "Femme",
          maladie: "Grippe",
          date: "02/01/2023",
        },
        {
          id: 3,
          nom: "Dberessif",
          prenom: " Marouane",
          genre: "Homme",
          maladie: "Allergie",
          date: "02/01/2023",
        },
      ]);
  return (
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
                    <button><img src={iconplus} className="w-10 m-10 "/></button>
               </div>

            ))}
     </div>
  )
}

