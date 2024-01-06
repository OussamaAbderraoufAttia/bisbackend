
import home from "../assets/icon_h.svg"
import patient from "../assets/icons_p.svg"
import appointement from "../assets/icons_r.svg"
import diagnostic from "../assets/icons_d.svg"
import logout from '../assets/icons_l.svg'
import { useNavigate } from 'react-router-dom';

export default function Sidebar()  {
  const navigate = useNavigate();

  const Handledashboard = () => {
    navigate('/dashboard' );
  };

  const Handlelogout = () => {
    navigate('/login' );
  };

  const Handlepatient = () => {
    navigate('/Listpatient' );
  };

  const Handlediagnosis = () => {
    navigate('/diagnosis' );
  };

  return (
    <div className=" flex flex-col w-1/5 pt-10 border-r-2 border-gray-300  ">
        <button onClick={Handledashboard} >
            <div className="mx-7 my-5 flex flex-row ">
              <img src={home} /> 
              <p className="mx-4">Dashboard</p>
            </div>
        </button>
        <button onClick={Handlepatient}>
            <div className="mx-7 my-5 flex flex-row ">
              <img src={patient} />
              <p className="mx-4">My patients</p>
            </div> 
        </button>
        <button >
        <div className="mx-7 my-5 flex flex-row ">
           <img src={appointement} />
            <p className="mx-4">Rendez-vous</p>
        </div>
        </button>
        <button >
          <div  className="mx-7 my-5 flex flex-row " onClick={Handlediagnosis}>
             <img src={diagnostic} />
             <p className="mx-4">Auto diagnostic </p>
          </div>
         </button>
         <button className="mt-auto" onClick={Handlelogout}>
          <div  className="mx-7 mb-10 flex flex-row " >
             <img src={logout} />
             <p className="mx-4">Déconnecté</p>
          </div>
         </button>
    </div>
  )
}
