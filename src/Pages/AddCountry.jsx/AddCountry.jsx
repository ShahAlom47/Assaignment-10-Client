import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";


const AddCountry = () => {

    const handelAddCountry = (e) => {

        e.preventDefault();
        const form = e.target
        const data = new FormData(e.target);

        const country_name = data.get('country_name')
        const imageURL = data.get('imageURL')

        const description = data.get('description')

        const FormDatas = {

            country_name,
            imageURL,
            description,
        }



        fetch('https://assaignment-10-server-sage.vercel.app/country', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormDatas),
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    toast.success(' Successfully Added Country ')
                    form.reset()

                    // setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
                }
            })

    }
    return (
        <div>
             <Helmet> <title>Trek Trove |Add Country  </title> </Helmet>
            <div className="py-16 w-8/12 m-auto">
                <div className="heading mb-5">
                    <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Add Country</h1>
                </div>
                <div className="">

                    <form onSubmit={handelAddCountry}>

                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="Country Name" name="country_name" className="input input-bordered w-full " required />
                        </div>
                        <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                            <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " required />
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

export default AddCountry;