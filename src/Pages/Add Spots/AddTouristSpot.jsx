import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Auth Provider/AuthProbider";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



const AddTouristSpot = () => {

    const { user } = useContext(AuthContext)
    const [showView, setView] = useState(false)
    const [insertedId, setInsertedId] = useState(null)

    const userName = user.displayName
    const userEmail = user.email



    const handelAddSpot = (e) => {


        e.preventDefault();
        const form = e.target
        const data = new FormData(e.target);
        const user_name = data.get('name')
        const user_email = data.get('email')
        const spot_name = data.get('spot_name')
        const country_name = data.get('country_name')
        const imageURL = data.get('imageURL')
        const location = data.get('location')
        const average_cos = data.get('average_cost')
        const average_cost=parseInt(average_cos)
        const seasonality = data.get('seasonality')
        const travel_time = data.get('travel_time')
        const totalVisitors = data.get('totalVisitors')
        const description = data.get('description')

        const FormDatas = {
            user_name,
            user_email,
            spot_name,
            country_name,
            imageURL,
            location,
            average_cost,
            seasonality,
            travel_time,
            totalVisitors,
            description,
        }

        console.log(FormDatas);


        fetch('https://assaignment-10-server-sage.vercel.app/spot', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormDatas),
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    toast.success(' Successfully Added Tourist Spot ')
                    setView(true)
                    setInsertedId(data.insertedId)
                    setTimeout(() => { setView(false) }, 5000)
                    form.reset()

                 



                }
            })

    }
    console.log(insertedId);

    return (
        <div>
            <div
                className="sticky top-28 z-20  flex justify-end"
                style={{
                    transition: 'transform 0.4s ease',
                    left: showView ? '100px' : '200px'
                }} >
                <button
                    style={{
                        transition: 'transform 0.4s ease',
                        transform: showView ? 'translateX(-0%)' : 'translateX(130%)'
                    }}
                    
                    className="btn btn-sm bg-green-600 text-white pr-16 rounded-none rounded-l-full">
                    <Link to={`/details/${insertedId}`}>View Spot</Link></button>
            </div>
            <div className="py-16 w-8/12 m-auto">
                <Helmet> <title>Trek Trove |Add Tourists Spots  </title> </Helmet>


              

                <div className="heading mb-5">
                    <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Add Tourists Spots</h1>
                </div>
                <div className="">

                    <form onSubmit={handelAddSpot}>

                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full " defaultValue={userName} required />
                            <input type="email" placeholder=" Email" name="email" className="input input-bordered w-full " defaultValue={userEmail} required />
                        </div>
                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="Spot Nmae" name="spot_name" className="input input-bordered w-full " required />
                            <input type="text" placeholder="Country Name" name="country_name" className="input input-bordered w-full " required />
                        </div>
                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " required />
                            <input type="text" placeholder="Location" name="location" className="input input-bordered w-full " required />
                        </div>
                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="Average Cost" name="average_cost" className="input input-bordered w-full " required />
                            <input type="text" placeholder="Seasonality- summer, winter" name="seasonality" className="input input-bordered w-full " />
                        </div>
                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="Travel Time " name="travel_time" className="input input-bordered w-full " />
                            <input type="text" placeholder="TotalVisitorsPerYear" name="totalVisitors" className="input input-bordered w-full " />
                        </div>

                        <textarea name="description" placeholder="Sort Description" id="" cols="30" rows="10" className="input input-bordered h-20 w-full"></textarea>
                        <input type="submit" value="Add" className="btn btn-s rounded-sm  bg-[#3fb232] border-none w-full my-5 text-white text-lg" />

                    </form>


                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddTouristSpot;