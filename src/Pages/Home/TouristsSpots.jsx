import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";


const TouristsSpots = () => {

    const [spotDatas, setSpotDatas] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {

        fetch('https://assaignment-10-server-sage.vercel.app/spot')
            .then(res => res.json())
            .then(data => setSpotDatas(data))

    }, [])



    
    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }



    return (
        <div className=" ">
             {/* <Helmet> <title>Trek Trove |Explore Tourist Spots  </title> </Helmet> */}
            <div className="heading mb-2">
                <p className="text-center text-green-700 text-xl" style={{ fontFamily: "Dancing Script, cursive" }}> Perfect for You </p>
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Explore Tourists Spots</h1>
            </div>

         {
            spotDatas.length===0 ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>
            :<>
               <div className="p-4 lg:p-11 pb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >
                {
                    spotDatas?.slice(0, 6).map((data,index) => <div key={data._id} 
                    className="card card-compact bg-base-100 shadow-xl  grid grid-rows-6 relative"
                    onMouseOver={() => handleMouseOver(index)}
                 onMouseOut={handleMouseOut}
                    >
                        <div 
                        className="row-span-4 flex justify-center items-end overflow-hidden" >

                            <img className="w-full h-full rounded-t-xl text-center" src={data.imageURL} alt="Shoes" 
                            style={{
                                transition: 'transform 0.9s ease',
                                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                              }}
                            />
                        </div>
                     
                        <div className="card-body row-span-2 mx-3">
                        <p className="flex items-center bg-green-600 text-white absolute top-3 left-3  px-5 py-1 rounded-sm gap-2"><FaClock></FaClock>  {data.travel_time}</p>
                            <div className="">
                                <h2 className="card-title text-gray-700">{data.spot_name}</h2>
                                <p className="flex items-center gap-1 font-medium text-gray-600"><CiLocationOn />{data.country_name}</p>

                            </div>
                            <div className="card-actions justify-between items-end ">
                               <Link to={`/details/${data._id}`}> <button className="btn btn-sm bg-transparent border border-green-700 rounded-sm px-4 hover:bg-green-700 hover:text-white">
                                    View Details </button></Link>

                                <div>
                                    <p className="font-medium text-gray-500"> Average Cost</p>
                                    <h2 className="text-xl text-green-700 font-semibold">{data.average_cost}</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    )
                }



            </div>
            <div className=" flex justify-center my-4">
                {

                    spotDatas.length > 6 &&<Link to={'/allSpot'}> <button className=" m-auto btn btn-sm bg-green-600  rounded-sm px-4 hover:bg-green-70 text-white">
                    See All Spot</button></Link>
                }
            </div>
            </>
         }
        </div>
    );
};

export default TouristsSpots;