import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const CountrySpot = () => {
    // const { country } = useParams()
    const countryData = useLoaderData();
    const navigate = useNavigate()
    console.log(countryData);
    return (
        <div>
              <Helmet>
                <title>Trek Trove | Country Tourist Spot</title>
            </Helmet>
            <div className="heading my-16">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Country Spots</h1>
                <h1 className=" text-xl font-bold text-center   py-3 font-mont" >Total Spot: {countryData.length}</h1>
               
            </div>
            {
                countryData.length === 0 ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>

                    : <div className="grid  grid-cols-1 gap-4 my-10 w-10/12 m-auto">
                       {
                        countryData.map(data=> <div key={data._id} className="card bg-base-100 border-2 shadow-emerald-200 shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title text-gray-600 font-bold my-3">Spot Name: {data.spot_name}</h2>
                            <p className="text-gray-600 lg:w-8/12">{data.description}</p>
                            <p className="flex items-center gap-1 font-medium text-gray-600">Country: {data.country_name}</p>
                            <p className="flex items-center gap-1 font-medium text-gray-600"><CiLocationOn />{data.location}</p>
                            <p className="font-medium text-gray-500">Seasonality : {data.seasonality}</p>
                            <p className=" text-gray-600 font-medium"> Average Cost: <span className=" text-lg font-semibold "> {data.average_cost} $</span></p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>navigate(-1)} className="btn btn-sm px-3 rounded-sm"><FaArrowLeft /> Back </button>
                            <Link to={`/details/${data._id}`}> <button className="btn btn-sm  border-none  rounded-sm px-4 hover:bg-green-900 text-white bg-green-700">
                                    View Details </button></Link>
                            </div>
                        </div>
                    </div>)
                       }

                    </div>
                
            }

        </div>
    );
};

export default CountrySpot;