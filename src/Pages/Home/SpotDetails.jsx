import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const SpotDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate()

    return (
        <div className="lg:w-8/12 md:w-8/12 w-10/12 m-auto">
            <div className="heading mb-5 my-16">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Spot Details</h1>
            </div>

            {
                data.length === 0 ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div> :

                    <div className="  flex lg:flex-row md:flex-row flex-col  gap-4 mb-10 ">
                        <div className="col-span-4 flex justify-center items-end md:w-6/12 lg:w-6/12">
                            <img className="w-full h-full rounded-xl text-center" src={data.imageURL} alt="Shoes" />
                        </div>
                        <div className=" md:w-6/12 lg:w-6/12 m-3 space-y-3">
                            <div className="  ">
                                <h2 className="card-title text-gray-700 mb-3">{data.spot_name}</h2>
                                <p className="mb-3 text-gray-500"> {data.description}</p>

                                <p className="flex items-center gap-1 font-medium text-gray-600"><CiLocationOn />{data.location}</p>
                                <p className="flex items-center gap-1 font-medium text-gray-600">Country: {data.country_name}</p>

                            </div>
                            <div className=" ">
                                <p className="font-medium text-gray-500">Seasonality : {data.seasonality}</p>

                                <p className="font-medium text-gray-500"> Total Visitors Per Year : {data.totalVisitors}</p>
                                <p className=" font-medium text-gray-500"> Travel Time : {data.travel_time}</p>

                            </div>
                            <div className="card-actions justify-between items-end ">

                                <p className=" text-gray-600 font-medium"> Average Cost <span className=" text-lg font-semibold "> {data.average_cost} $</span></p>
                                <Link ><button onClick={() => navigate(-1)} className=" btn btn-sm  flex items-center "> &#8592; Back</button></Link>

                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SpotDetails;