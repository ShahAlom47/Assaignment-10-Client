import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

const AddGuide = () => {


    const handelAddGuide = (e) => {

        e.preventDefault();
        const form= e.target
        const data = new FormData(e.target);

        const guide_name = data.get('guide_name')
        const designation = data.get('designation')
        const imageURL = data.get('imageURL')
        const guide_mobile = data.get('guide_mobile')
        const guide_email = data.get('guide_email')

      

        const FormDatas = {

            guide_name,
            designation,
            imageURL,
            guide_mobile,
            guide_email,
            
           
        }



        fetch('https://assaignment-10-server-sage.vercel.app/guide', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormDatas),
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    toast.success(' Successfully Added Guide ')
                    form.reset()

                    // setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
                }
            })

    }
    return (
        <div>
        <Helmet> <title>Trek Trove |Add Guide  </title> </Helmet>
       <div className="py-16 w-8/12 m-auto">
           <div className="heading mb-5">
               <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Add Guide</h1>
           </div>
           <div className="">

               <form onSubmit={handelAddGuide}>

                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="Guide Name" name="guide_name" className="input input-bordered w-full " required />
                   </div>
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="Designation" name="designation" className="input input-bordered w-full " defaultValue={'Tour Guide'} required />
                   </div>
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " required />
                   </div>
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="Mobile No" name="guide_mobile" className="input input-bordered w-full " required />
                   </div>
                   <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                       <input type="text" placeholder="Email" name="guide_email" className="input input-bordered w-full " required />
                   </div>

                   <input type="submit" value="Add" className="btn btn-s rounded-sm  bg-[#3fb232] border-none w-full my-5 text-white text-lg" />

               </form>


           </div>
           <ToastContainer />
       </div>

   </div>
    );
};

export default AddGuide;