import { useEffect } from "react";
import { useState } from "react";
import 'animate.css';





const TopGuide = () => {
  

    const [guideData, setGuideData] = useState([])
    useEffect(() => {

        fetch('https://assaignment-10-server-sage.vercel.app/guide')
            .then(res => res.json())
            .then(data => setGuideData(data))

    }, [])


    return (
        <div>
            <div className="heading mb-2">
                <p className="text-center text-green-700 text-xl" style={{ fontFamily: "Dancing Script, cursive" }}> Read The Top </p>
                <h1 className=" text-3xl font-bold text-center  py-3 font-mont" >Tour Guides</h1>
                <p className="text-gray-600 text-center lg:w-5/12 m-auto mb-6">Our guides are top-notch local experts, providing personalized experiences and profound cultural insights.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  w-11/12 m-auto my-10">
                {
                    guideData.map(data => <div key={data._id}>
                        <div className="card bg-base-100 shadow-xl  hover:-translate-y-4 duration-700   ">
                            <figure className=" relative">
                                <img src={data.imageURL} alt="Shoes" className="rounded-xl" />
                               
                                <div className="dropdown dropdown-top  dropdown-hover absolute bottom-3 left-3 bg-slate-500 rounded-full">
                                    <button tabIndex={0} className=" btn btn-sm border-none bg-green-600 rounded-full px-5 py-1 font-medium text-white hover:bg-gray-300 hover:text-gray-700">
                                    Contact</button>
                                    <ul tabIndex={0}  className=" animate__animated animate__zoomInUp  dropdown-content z-[3] menu p-2 shadow bg-gray-300  rounded-lg w-52 relative mb-5">
                                        
                                        <li className="font-medium"> Mobile: {data.guide_mobile}</li>
                                        <li className="font-medium">Email: {data.guide_email}</li>
                                        <div className=" relative -bottom-4 left-1/4 transform rotate-45 z-1 w-4 h-4 bg-gray-300"></div>
                                    </ul>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-700">{data.guide_name}</h2>
                                <p className="text-gray-500 font-medium">{data.designation}</p>

                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default TopGuide;