
import Group3Image from '../assets/Group-3.svg';
import { useNavigate } from 'react-router-dom';

export default function Homeelement()  {
  
    const navigate = useNavigate();

    const Handlelogin = () => {
        navigate('/login' );
    };

    const HandleSignup = () => {
        navigate('/signup' );
    };
    return (
      <div className='flex justify-center items-center min-h-screen font-[poppins]'>
         <div className='flex flex-col w-1/2 items-center justify-center  border-2 border-gray-300  p-20 rounded-lg'> 
              <img src={Group3Image} />
              <div className='flex flex-row w-full mt-20'>
               <button className='bg-custom-blue rounded-lg text-white w-1/2 m-6 h-10' onClick={Handlelogin}>Connectez-vous </button>  
               <button className='bg-white rounded-lg text-custom-blue border border-custom-blue  w-1/2 m-6 h-10' onClick={HandleSignup}>Inscrivez-vous</button>  
              </div>
              
              
           </div>
      </div>
    )
  
}
