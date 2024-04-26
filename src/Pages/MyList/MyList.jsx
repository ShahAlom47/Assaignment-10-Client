import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProbider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const MyList = () => {
    const { user } = useContext(AuthContext)
    const userEmail = { email: user.email }
    const [myData, setMyData] = useState([])
    const [updateData, setUpdatedData] = useState(myData)
    const [acceptedData,setAcceptedData]=useState([])


    console.log(user.email);

    useEffect(() => {


        fetch('http://localhost:3000/spot/myData', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userEmail)
        }

        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyData(data)
            })


            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }, [updateData])



    const handelDeletMySpot = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/spot/${_id}`, {

                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "Success"
                            });

                            setMyData(myData.filter(data => data._id !== _id))
                        }
                    })

            }
        });

    }

    const handelEditSpot = (_id) => {
        document.getElementById('my_modal_5').showModal()
        fetch(`http://localhost:3000/spot/${_id}`)
        .then(res=>res.json())
        .then(data=>setAcceptedData(data))
    }



    const handelEditForm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user_name = data.get('name')
        const user_email = data.get('email')
        const spot_name = data.get('spot_name')
        const country_name = data.get('country_name')
        const imageURL = data.get('imageURL')
        const location = data.get('location')
        const average_cost = data.get('average_cost')
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




    }



    return (
        <div>
            <div className="heading my-16">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >My List</h1>
            </div>
            <div>
                {
                    myData.map((data) => <div key={data._id} className="lg:w-8/12 md:w-8/12 w-10/12 m-auto mb-4">
                        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row lg:flex-row">
                            <figure className="lg:w-4/12 md:w-4/12 ">
                                <img className=" sm:rounded-xl" src={data.imageURL} alt="Movie" />
                            </figure>
                            <div className="card-body pb-2">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">

                                    <Link to={`/details/${data._id}`}>   <button className="btn  btn-sm rounded-sm  bg-[#3fb232] border-none  my-5 text-white ">View Details</button></Link>
                                    <button onClick={(() => handelEditSpot(data._id))} className="btn btn-sm  rounded-sm  bg-[#3fb232] border-none  my-5 text-white ">Edit</button>
                                    <button onClick={() => handelDeletMySpot(data._id)} className="btn btn-sm  rounded-sm  bg-[#d33e3e] border-none  my-5 text-white ">Delete</button>
                                </div>
                            </div>
                        </div></div>)
                }

            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-0">
                <div className="modal-box ">

                  
                    <div>
                        <form onSubmit={handelEditForm}>

                            <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-full " defaultValue={acceptedData.user_name} required />
                                <input type="email" placeholder=" Email" name="email" className="input input-bordered w-full " defaultValue={acceptedData.user_email}  required />
                            </div>
                            <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                                <input type="text" placeholder="Spot Nmae" name="spot_name" className="input input-bordered w-full " defaultValue={acceptedData.spot_name} required />
                                <input type="text" placeholder="Country Name" name="country_name" className="input input-bordered w-full " required  defaultValue={acceptedData.country_name} />
                            </div>
                            <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                                <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " required  defaultValue={acceptedData.imageURL}/>
                                <input type="text" placeholder="Location" name="location" className="input input-bordered w-full " required defaultValue={acceptedData.location} />
                            </div>
                            <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                                <input type="text" placeholder="Average Cost" name="average_cost" className="input input-bordered w-full " required  defaultValue={acceptedData.average_cost}/>
                                <input type="text" placeholder="Seasonality- summer, winter" name="seasonality" className="input input-bordered w-full " defaultValue={acceptedData.seasonality} />
                            </div>
                            <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                                <input type="text" placeholder="Travel Time " name="travel_time" className="input input-bordered w-full " defaultValue={acceptedData.travel_time} />
                                <input type="text" placeholder="TotalVisitorsPerYear" name="totalVisitors" className="input input-bordered w-full " defaultValue={acceptedData.totalVisitors}/>
                            </div>

                            <textarea name="description" placeholder="Sort Description" id="" cols="30" rows="10" className="input input-bordered h-20 w-full" defaultValue={acceptedData.description}></textarea>
                            <input type="submit" value="Save" className="btn btn-s rounded-sm  bg-[#3fb232] border-none w-full my-5 text-white text-lg" />

                        </form>
                        <div className="btn  rounded-sm  bg-[#252b25] border-none w-full  text-white text-lg">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=''>Cancel</button>
                        </form>
                    </div>






                    </div>


                </div>
            </dialog>


        </div>
    );
};

export default MyList;