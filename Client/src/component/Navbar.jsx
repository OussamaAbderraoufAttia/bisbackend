
import Group3Image from '../assets/Group-3.svg';
import editlogo from '../assets/edit.svg'
import elipse from '../assets/Ellipse.svg'

export default function Navbar() {
  return (
    <>
     <div className='flex flex-row  my-6 mx-6'>
        <img src={Group3Image} className=' w-1/5 ml-6'/>
        <div className='flex-grow'></div>
        <div className='flex flex-row items-right justify-center '>
        <img src={editlogo} className=' w-8 mr-2'/>
        <img src={elipse} className=' w-10 mx-4'/>
        </div> 
     </div>
    <hr className='border-1 border-gray-300 '/>
    </>
   
  )
}
