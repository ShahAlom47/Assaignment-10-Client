import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const CountrySection = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const [countryData, setCountryData] = useState([])
    useEffect(() => {
        fetch('https://assaignment-10-server-sage.vercel.app/country')
            .then(res => res.json())
            .then(data => setCountryData(data))


    }, [])


    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }

    const handelCuntryCard = (country) => {

        navigate(`/countrySpot/${country}`)
    }
    return (
        <section className="my-20">
             {/* <Helmet> <title>Trek Trove |Top Destination  </title> </Helmet> */}
            <div className="heading mb-2">
                <p className="text-center text-green-700 text-xl" style={{ fontFamily: "Dancing Script, cursive" }}> Get Ready To </p>
                <h1 className="text-3xl font-bold text-center border-b-4 py-3 font-mont">Explore Top Destination</h1>
            </div>
            {
                countryData.length === 0 ? <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>
                    : <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:p-10 p-6 gap-5">
                        {
                            countryData.map((data, index) => (
                                <div key={data._id}
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={handleMouseOut}
                                    onClick={() => handelCuntryCard(data.country_name)}
                                    className="relative shadow-xl image-full rounded-md h-60 overflow-hidden hover:-translate-y-4 hover:transform duration-300 btn bg-none p-0"

                                >
                                    <figure className="w-full h-full"><img className="rounded-md w-full h-full" src={data.imageURL} alt="Shoes" /></figure>
                                    <h2 className="card-title mb-8 text-gray-200 font-semibold absolute top-3/4  -left-0 bg-[#000000c3] px-9 py-2 rounded-r-full"
                                        style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateX(-100%)' : 'translateX(-0%)' }}
                                    >{data.country_name}</h2>
                                    <div className="p-5 flex flex-col justify-end relative bg-[#00000080] text-gray-50 "
                                        style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'translateY(-100%)' : 'translateY(-0%)' }}>

                                        {/* <h2 className="card-title mb-8 text-gray-300 font-semibold ">{data.country_name}</h2> */}
                                        <p className="text-lg">{data.description}</p>
                                        <div className="card-actions justify-end"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </section>
    );
};

export default CountrySection;