
import pic1 from "../assets/p1.svg"
import pic2 from "../assets/p2.svg"
import arrow1 from "../assets/f1.svg"
import arrow2 from "../assets/f2.svg"

export default function Patientcard() {
    const np=19;
    const ap=23;
  return (
   <div className="border-2 border-gray-300  p-5 m-5 rounded-lg flex flex-col w-1/2">
    <p className="text-s text-gray-300 ml-auto">Les 15 derniers jours</p>
    <div className="flex flex-row m-4">
      <img src={pic2} className="w-1/4"/>
      <div>
        <p className="mx-5 my-1 text-custom-blue text-xl text-bold p-4 ">Nouveaux patients</p>
        <p className="mx-5 my-1 text-black text-3xl text-extrabold p-4" >{np}</p>
      </div>
      <img src={arrow1} className="w-1/4" />
    </div>
    <div className="flex flex-row m-4">
      <img src={pic1} className="w-1/4"/>
      <div>
        <p className="mx-5 my-1 text-custom-blue text-xl text-bold p-4 ">Anciens patients</p>
        <p className="mx-5 my-1 text-black text-3xl text-extrabold p-4" >{ap}</p>
      </div>
      <img src={arrow2} className="w-1/4" />
    </div> 
    </div>
  )
}
