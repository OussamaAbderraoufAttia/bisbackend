import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Group3Image from '../assets/Group-3.svg';
//import axios, { Axios } from 'axios';

export default function Signupelement() {
    const [mail, setmail] = useState("");
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [nb, setnb] = useState("");
    const [psw, setpsw] = useState("");
    const [spy, setspy] = useState("");
    const [cpsw, setcpsw] = useState("");
    const [lieu, setlieu] = useState("");
    
    const navigate = useNavigate();
  
    const HandleLogin = () => {
      navigate('/dashboard' );
    };

    /*
    const HandleLogin = async () => {
        await axios.post("http://localhost:5003/doctors/register",{
            firstname:prenom,
            lastname:nom,
            specialty:spy,
            email:mail,
            password:psw,
            phone_number:nb,
            workplace:cpsw,
        }).then(response=>{
            console.log(response.data);
        })
        navigate('/dashboard' );
    }; */
   
    return (
      <div className='flex justify-center items-center min-h-screen font-[poppins]'>
          <div className='flex flex-col w-3/4 items-center justify-center'>
          <img src={Group3Image} className='w-1/3 mt-10'  alt="Group3Image" />
          <p className='text-center text-s  mt-2 ml-16 text-gray-300'>
             Céer un compte 
           </p>
          <div className='gap-x-20 flex flex-row mt-10 '>
          <div className=' w-1/2'>
               <div className='mt-5 w-full'>
                  <label htmlFor="prenom" className='text-lg mx-12 text-gray-500 block'>Prénom</label>
                  <input type="name" id="prenom"  value={prenom} onChange={(e) => setprenom(e.target.value)} placeholder='Entrer votre nom.' className='bg-gray-200 block w-full mt-2 mx-12 pl-6 h-10 rounded-lg' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="mail" className='text-lg text-gray-500 mx-12 block'>Email</label>
                  <input type="text" id="mail" placeholder="info@example.com" value={mail} onChange={(e) => setmail(e.target.value)} className='bg-gray-200 mx-12 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg text-s text-gray-400' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="psw" className='text-lg text-gray-500 mx-12 block'>Mot de passe</label>
                  <input type="password" id="psw" value={psw} onChange={(e) => setpsw(e.target.value)}placeholder='xxxxxxxx' className='bg-gray-200 block w-full mt-2 mx-12  pl-6 h-10 rounded-lg' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="spy" className='text-lg mx-12 text-gray-500 block'>Spécialité</label>
                  <input type="speciality" id="spy" value={spy} onChange={(e) => setspy(e.target.value)} placeholder='Indiquez la spécialité professionnelle' className='bg-gray-200 mx-12 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
              </div>
          </div>
  
          <div className=' w-1/2'>
              <div className='mt-5 w-full'>
                  <label htmlFor="nom" className='text-lg mx-12 text-gray-500 block'>Nom de famille</label>
                  <input type="password" id="nom" value={nom} onChange={(e) => setnom(e.target.value)} placeholder='Enter votre nom' className='bg-gray-200 mx-12 block w-full mt-2  pl-6 h-10 rounded-lg' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="nb" className='text-lg text-gray-500 block mx-12'>Numéro de téléphone</label>
                  <input type="speciality" id="nb" value={nb} onChange={(e) => setnb(e.target.value)} placeholder='658784388' className='bg-gray-200 mx-12 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="cpsw" className='text-lg text-gray-500 block mx-12'>Confirmer mot de passe</label>
                  <input type="password" id="cpsw" value={cpsw} onChange={(e) => setcpsw(e.target.value)} placeholder='xxxxxxxx' className='bg-gray-200 mx-12 pt-0	block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
              </div>
              <div className='mt-5 w-full'>
                  <label htmlFor="lieu" className='text-lg text-gray-500 block mx-12'>Lieu de travail</label>
                  <input type="password" id="lieu" value={lieu} onChange={(e) => setlieu(e.target.value)} placeholder='Indiquez votre lieu de travail' className='mx-12 bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
              </div>
          </div>
      </div>
      <button className='bg-custom-blue rounded-lg text-white w-1/4 mt-12 ml-16 h-10' onClick={HandleLogin}>Inscrivez-vous</button>
      </div>
  
      </div>
      
  
       
      
    )
  }

