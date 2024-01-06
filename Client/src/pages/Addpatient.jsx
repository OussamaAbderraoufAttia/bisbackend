import { useState } from 'react';
import Navbar from "../component/Navbar"
import Sidebar from "../component/sidebar"
import pdp from "../assets/pdp.svg"

export default function Addpatient() {
  const [mail, setmail] = useState("");
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [nb, setnb] = useState("");
  const [lieu, setlieu] = useState("");
  const [age, setage] = useState("");
  const [ant, setant] = useState("");
  const [alergie, setalergie] = useState("");
  
  return (
    <div className=" flex flex-col w-full min-h-screen font-[poppins]">
     <Navbar/>
     <div className="flex flex-row flex-grow ">
      <Sidebar/>
     <div className=" w-full" >
      <h2 className=" mx-10 my-10 text-custom-blue text-3xl text-extrabold ">Ajouter un nouveau patient </h2>
      <div className=" flex flex-row border-2 border-gray-300 p-10 m-5 rounded-lg">
        <div className=" flex flex-col w-1/4 h-1/4 ">
          <img src={pdp} className="m-2 "/>
          <a href=""> <p className="text-custom-blue text-center">Ajouter une photo</p></a>
        </div>
        <div className=" flex flex-col w-3/4 ">
           <div className=' w-full'>
                
            <form className="flex flex-col">
                <p className="text-lg my-2 text-gray-300 block">Informations personnelles</p>
                <input type="text"  placeholder='Prénom'  value={prenom} onChange={(e) => setprenom(e.target.value)} className='bg-gray-200 my-2 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
                <input type="text"  placeholder='Nom de famille' value={nom} onChange={(e) => setnom(e.target.value)} className='bg-gray-200 my-2 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
                <div className="flex flex-row my-2 w-1/2">
                 <input type="number" min="0" max="150" placeholder='Age' value={age} onChange={(e) => setage(e.target.value)} className='bg-gray-200 my-2 mr-8 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
                
                 <select id="gender"  className='bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg text-gray-400'>
                  <option value="" disabled selected >Sexe</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                 </select>
                </div>
                <input type="text" value={lieu} onChange={(e) => setlieu(e.target.value)} placeholder='Location' className='bg-gray-200 my-2 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
                <input type="mail"  placeholder='Adresse e-mail' value={mail} onChange={(e) => setmail(e.target.value)} className='bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg text-s ' />
                <input type="text"  placeholder="Numéro de téléphone" value={nb} onChange={(e) => setnb(e.target.value)} pattern="[0-9+-]+" className='bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg text-s ' />
                <p className="text-lg my-2 text-gray-300 block">Informations médicales</p>
                <select id="gender"  className='bg-gray-200 block w-1/3 mt-2 mb-2 pl-6 h-10 rounded-lg text-gray-400'>
                  <option value="" disabled selected >Group singuin</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                </select>
                 <div className="relative">
                   <textarea type="text"  placeholder='Antécédents médicaux..' value={ant} onChange={(e) => setant(e.target.value)} className='bg-gray-200 my-2  w-full mt-2 mb-2 p-4 h-40 rounded-lg ' />
            
                 </div>
               <input type="text"  value={alergie} onChange={(e) => setalergie(e.target.value)} placeholder='Allergies...' className='bg-gray-200 my-2 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
               <div className=" ml-auto">
                 <button className="bg-custom-blue rounded-lg text-white w-40 mt-6 h-10 mx-5 ">Enregistrer</button>
                 <button className='bg-[#FFF0EF] rounded-lg text-[#DA0000]  border border-[#DA0000] w-40 mt-6 h-10 ' >Annuler</button>    
               </div>
               
             </form> 
               
           
            </div>
        </div>
       

      </div>
      
      <div>

      </div>
     </div>
     
     </div>
     
    </div>
    
  )
}
