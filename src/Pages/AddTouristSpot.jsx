

const AddTouristSpot = () => {

    const handelAddSpot = (e) => {

        e.preventDefault();
        const data = new FormData(e.target);
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
        <div className="py-16 w-8/12 m-auto">
            <div className="heading mb-5">
                <h1 className=" text-3xl font-bold text-center border-b-4  py-3 font-mont" >Add Tourists Spots</h1>
            </div>
            <div className="">

                <form onSubmit={handelAddSpot}>

                    <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                        <input type="text" placeholder="Spot Nmae" name="spot_name" className="input input-bordered w-full " />
                        <input type="text" placeholder="Country Name" name="country_name" className="input input-bordered w-full " />
                    </div>
                    <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                        <input type="text" placeholder="ImageURL" name="imageURL" className="input input-bordered w-full " />
                        <input type="text" placeholder="Location" name="location" className="input input-bordered w-full " />
                    </div>
                    <div className=" flex gap-4 justify-center lg:flex-row md:flex-row flex-col  mb-3 ">
                        <input type="text" placeholder="Average Cost" name="average_cost" className="input input-bordered w-full " />
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

        </div>
    );
};

export default AddTouristSpot;