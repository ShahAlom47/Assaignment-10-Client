import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const TouristsSpots = () => {

    const [spotDatas, setSpotDatas] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/spot')
            .then(res => res.json())
            .then(data => setSpotDatas(data))

    }, [])


    return (
        <div className=" ">
            <div className="heading mb-2">
                <p className="text-center text-green-700 text-xl" style={{ fontFamily: "Dancing Script, cursive" }}> Get Ready To </p>
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Explore Tourists Spots</h1>
            </div>

         {
            spotDatas.length===0 ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>
            :<>
               <div className="p-4 lg:p-11 pb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    spotDatas?.slice(0, 6).map((data) => <div key={data._id} className="card card-compact bg-base-100 shadow-xl  grid grid-rows-6">
                        <div className="row-span-4 flex justify-center items-end">
                            <img className="w-full h-full rounded-t-xl text-center" src={data.imageURL} alt="Shoes" />
                        </div>
                        <div className="card-body row-span-2 mx-3">
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