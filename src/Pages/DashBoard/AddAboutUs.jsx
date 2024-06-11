
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

const AddAboutUs = () => {
    const handelAboutUsGuide=(e)=>{

    e.preventDefault();
    const form= e.target
    const data = new FormData(e.target);

    const client_name = data.get('client_name')
    const description = data.get('description')
    const imageURL = data.get('imageURL')
    const ratingS = data.get('rating')
    const rating =parseInt(ratingS);
    

  

    const FormDatas = {

        client_name,
        description,
        imageURL,
        rating
       
        
       
    }

    console.log(FormDatas);


    fetch('https://assaignment-10-server-sage.vercel.app/client', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormDatas),
    })

        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {

                toast.success(' Successfully Added Client ')
                form.reset()

                // setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
            }
        })

    


        }


    return (
        <div>
  <div>
        <Helmet> <title>Trek Trove |Add Our Client  </title> </Helmet>
       <div className="py-16 w-8/12 m-auto">
           <div className="heading mb-5">
               <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Add Our Client</h1>
           </div>
           <div className="">

               <form onSubmit={handelAboutUsGuide}>

                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="Client Name" name="client_name" className="input input-bordered w-full " required />
                   </div>
                  
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " required />
                   </div>
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="number" max={5} min={0} placeholder="Rating (0-5)" name="rating" className="input input-bordered w-full " required />
                   </div>
                
                   <textarea className="input input-bordered w-full h-24 " name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>

                   <input type="submit" value="Add" className="btn btn-s rounded-sm  bg-[#3fb232] border-none w-full my-5 text-white text-lg" />

               </form>


           </div>
           <ToastContainer />
       </div>

   </div>
    
            
        </div>
    );
};

export default AddAboutUs;