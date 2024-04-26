import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";


const TouristsSpots = () => {

    const [spotDatas, setSpotDatas] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/spot')
            .then(res => res.json())
            .then(data => setSpotDatas(data))

    }, [])


    return (
        <div className=" ">
            <div className="heading mb-5">
                <p className="text-center text-green-700 text-xl" style={{ fontFamily: "Dancing Script, cursive" }}> Get Ready To </p>
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Explore Tourists Spots</h1>
            </div>

            <div className="p-4 lg:p-11  grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    spotDatas?.map((data) => <div key={data._id} className="card card-compact bg-base-100 shadow-xl  grid grid-rows-6">
                        <div className="row-span-4 flex justify-center items-end">
                            <img className="w-full h-full rounded-t-xl text-center" src={data.imageURL} alt="Shoes" />
                        </div>
                        <div className="card-body row-span-2 mx-3">
                          <div className="">
                          <h2 className="card-title text-gray-700">{data.spot_name}</h2>
                            <p className="flex items-center gap-1 font-medium text-gray-600"><CiLocationOn />{data.country_name}</p>

                          </div>
                            <div className="card-actions justify-between items-end ">
                                <button className="btn btn-sm bg-transparent border border-green-700 rounded-sm px-4 hover:bg-green-700 hover:text-white">
                                    View Details </button>

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

        </div>
    );
};

export default TouristsSpots;