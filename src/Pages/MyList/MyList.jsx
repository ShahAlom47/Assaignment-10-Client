import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProbider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext)
    const userEmail = { email: user.email }
    const [myData, setMyData] = useState([])
    const [updateData,setUpdatedData]=useState(myData)
   


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


    
    const handelDeletMySpot =(_id)=>{

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
                    if (data.deletedCount>0) {
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "Success"
                              });      
                              
                            setMyData(  myData.filter(data=>data._id!==_id))
                    }
                })

            }
          });

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
                                <button className="btn btn-sm  rounded-sm  bg-[#3fb232] border-none  my-5 text-white ">Edit</button>
                                <button onClick={()=>handelDeletMySpot(data._id)} className="btn btn-sm  rounded-sm  bg-[#d33e3e] border-none  my-5 text-white ">Delete</button>
                            </div>
                        </div>
                    </div></div>)
                }

            </div>

        </div>
    );
};

export default MyList;