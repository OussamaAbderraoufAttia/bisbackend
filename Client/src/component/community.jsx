

export default function Community() {
  return (
    <div className="border-2 border-gray-300  p-5 m-5 rounded-lg flex flex-col w-1/2 items-center">
         <p className="mx-5 my-1 text-custom-blue text-2xl text-extrabold p-4 ">Ne manquez pas les dernières mises à jour dans la communauté medicales</p>
         <div className="flex flex-col w-1/2 justify-center items-center">
           <button className='bg-custom-blue rounded-lg text-white w-full mt-6 h-10' >Ajouter un post</button>
           <button className='bg-white rounded-lg text-custom-blue border border-custom-blue w-full mt-6 h-10'>Visiter communauté</button>
         </div> 
     </div>
  )
}
