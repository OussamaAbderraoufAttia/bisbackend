import Graph from '../component/Graph'



export default function graphcard() {
    const data = {
        'January': 1000,
        'February': 1200,
        'March': 800,
        'April':500,
        'May':2000,
        'June':1500,
        'July':1400,
        'August':3000,
        'September':2500,
        'October':400,
        'November':2800,
        'December':5000,
      };
  return (
    <div className="border-2 border-gray-300  p-5 m-5 rounded-lg flex flex-col w-1/2">
    <p className="mx-5 my-1 text-custom-blue text-2xl text-extrabold p-4 ">Argent gagné:</p>
    <Graph data={data} />
  </div>
  )
}
