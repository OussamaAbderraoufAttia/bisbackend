
import Navbar from "../component/Navbar"
import Sidebar from "../component/sidebar"
import Calender from "../assets/Calendar.svg"
import Group from "../assets/Group.svg"
import Gloves from "../assets/Gloves.svg"

import Graphcard  from "../component/graphcard"
import Patientcard from "../component/patientcard"
import Rendezvouscard from "../component/rendezvouscard"
import Community from "../component/community"
import { Card } from "../component/card"


export default function Dashboard() {
    const name="shayma";
    const RV=156;
    const P=78;
    const ch=3;

     

  return (

    <div className=" flex flex-col w-full min-h-screen font-[poppins] my-5">
    <Navbar/>
    <div className="flex flex-row flex-grow ">
     <Sidebar/>
     <div className=" w-full" >
      <h2 className=" mx-10 my-10 text-custom-blue text-3xl font-extrabold ">Bienvenue Dr.{name} !</h2>
      
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Card title="Rendez-vous" value={RV} imageSrc={Calender} />
          <Card title="Patient" value={P} imageSrc={Group} />
          <Card title="Chirurgie" value={ch} imageSrc={Gloves} />
        </div>

         <div className="flex flex-row">
          <Graphcard/>
          <Patientcard/>
         </div>

         <div className="flex flex-row">
          <Rendezvouscard/>
          <Community/>
         </div>

       

      </div>
      
      </div>
       
     </div>
     </div>
  )
}
