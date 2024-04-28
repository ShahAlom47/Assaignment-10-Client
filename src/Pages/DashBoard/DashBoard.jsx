import { useState } from "react";
import { Helmet } from "react-helmet";
import AddCountry from "../AddCountry.jsx/AddCountry";
import AddGuide from "./AddGuide";





const DashBoard = () => {
    const [countryForm,setCountryForm] = useState(false)
    const [guideForm,setGuideForm] = useState(false)

    const handelCountryForm=()=>{
        setCountryForm(!countryForm)
        setGuideForm(false)

    }
    const handelGuideForm= ()=>{
        setCountryForm(false)
        setGuideForm(!guideForm)


    }
    
    return (
        <div>
            <Helmet>
                <title>Trek Trove | Dashboard</title>
            </Helmet>
            <div className="heading mt-16">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Dashboard</h1>
            </div>
            <div className=" my-14 w-11/12 m-auto flex lg:flex-row md:flex-row flex-col ">
                <div className="lg:w-4/12 md:w-4/12 flex gap-3 lg:flex-col md:flex-col border-r-4 p-8">
                    <button onClick={()=>handelCountryForm()} className=" btn bg-green-600 rounded-none rounded-r-full text-white "> + Add Country</button>
                    <button onClick={handelGuideForm} className=" btn bg-green-600 rounded-none rounded-r-full text-white "> + Add Guide</button>

                </div>
                <div className="flex-1">
                    {
                        countryForm&&<> <AddCountry></AddCountry></>
                        
                    }
                    {
                        guideForm&& <><AddGuide></AddGuide></>
                    }

                  
                </div>

            </div>
        </div>
    );
};

export default DashBoard;