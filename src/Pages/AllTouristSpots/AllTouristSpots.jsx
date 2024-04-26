import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristSpots = () => {

    const loadedData = useLoaderData()
    const [spotDatas, setSpotDatas] = useState(loadedData);
    const [loading, setLoading] = useState(false)

    const handelHighToLow = () => {
        setLoading(true);
        fetch('http://localhost:3000/spotLow')
            .then(res => res.json())
            .then(data => {

                setSpotDatas(data)
                setLoading(false);
            })

    }

    const handelLowToHight = () => {
        setLoading(true);
        fetch('http://localhost:3000/spotUp')
            .then(res => res.json())
            .then(data => {

                setSpotDatas(data)
                setLoading(false);
            })


    }

    return (
        <div className=" p-8">
            <div className="heading mt-16">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >All Tourists Spots</h1>
            </div>






            <div className=" flex justify-end my-5">
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <div tabIndex={0} role="button" className=" w-40 btn btn-sm bg-green-600  rounded-sm px-4 hover:bg-green-700 text-white ">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-600 rounded-lg w-40">
                        <button onClick={handelHighToLow} className=" btn btn-sm rounded-b-none">Hight To Low</button>
                        <button onClick={handelLowToHight} className=" btn btn-sm rounded-t-none">Low To High</button>
                    </ul>
                </div>
            </div>


            {
                loading ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>

                    : <div>

                        <div className=" lg:grid-cols-4 md:grid-cols-3 grid-cols-1 grid gap-5">



                            {

                                spotDatas.map(data => <div key={data._id} className="card card-compact bg-base-100 shadow-xl   h-96">
                                    <div className=" flex justify-center items-end h-2/4 ">
                                        <img className="w-full h-full rounded-t-xl text-center" src={data.imageURL} alt="Shoes" />
                                    </div>
                                    <div className="card-body  mx-3">
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
                                </div>)
                            }
                        </div>
                        <div className=" flex justify-center my-4">
                                {

                                    spotDatas.length > 6 && <Link to={'/allSpot'}> <button className=" m-auto btn btn-sm bg-green-600  rounded-sm px-4 hover:bg-green-70 text-white">
                                        See All Spot</button></Link>
                                }
                            </div>
                    </div>

            }
        </div>
    );
};

export default AllTouristSpots;