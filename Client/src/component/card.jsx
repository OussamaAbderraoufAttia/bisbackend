

 export const Card = ({ title, value, imageSrc }) => {
  return (
    
     <div className="border-2 border-gray-300  p-5 m-5 rounded-lg flex flex-row w-1/3">
      <img src={imageSrc} className="mx-5" alt={title}/>
      <div className="">
       <p className="mx-5 my-1 text-custom-blue text-2xl text-extrabold ">{title}</p>
       <p className="mx-5 my-1 text-black text-2xl text-extrabold" >{value}</p>
      </div>
    </div>
   
  );
}

