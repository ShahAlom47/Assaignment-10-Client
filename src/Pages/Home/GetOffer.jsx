import { GrMapLocation } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import { TbWorldShare } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";


const GetOffer = () => {
    return (
        <div className=" lg:relative mb-20 ">
            <div className="h-[600px] relative w-11/12 m-auto  overflow-hidden rounded-lg">
                
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
                    <h1 className="text-4xl font-bold text-white">Get 
                    <Typewriter
                                        words={[' 20% OFF Your ']}
                                        loop={10}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={200}
                                        deleteSpeed={200}
                                        delaySpeed={800}
                                    // onLoopDone={handleDon}
                                    // onType={handleType}
                                    />
                    </h1>
                    <h1 className="text-4xl font-bold text-white">First <span className="text-green-600">TRIP!</span></h1>
                    <p className="text-gray-200 lg:w-6/12 md:w-10/12 mx-auto">Don’t Wanna Miss Somethings? Subscribe Right Now & Get The Special Discount & Monthly Newsletter.</p>
                    <div className="bg-white rounded-md pl-3 my-4 justify-between">
                    <input className="bg-white" type="text" placeholder="Type here"  />
                    <button className="btn bg-green-700 text-white border-none rounded-md">Subscribe</button>
                    </div>
                </div>
                <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          
            <div className=" lg:absolute -bottom-24 flex lg:flex-row flex-col gap-8 justify-center  w-full mb-10  ">
                <div className=" bg-white rounded-lg flex flex-col  text-center shadow-lg p-6 px-8 hover:-translate-y-4 duration-700  ">
                    <TbWorldShare className="m-auto text-3xl text-green-600" />
                    <h1 className="text-3xl font-bold">500</h1>
                    <p className="font-medium">Awesome Tour</p>
                </div>
                <div className=" bg-white rounded-lg flex flex-col  text-center shadow-lg p-6 px-8 hover:-translate-y-4 duration-700 ">
                    <GrMapLocation  className="m-auto text-3xl text-green-600" />
                    <h1 className="text-3xl font-bold">300</h1>
                    <p className="font-medium">New Destinations</p>
                </div>
                <div className=" bg-white rounded-lg flex flex-col  text-center shadow-lg p-6 px-8 hover:-translate-y-4 duration-700 ">
                    <SlBadge className="m-auto text-3xl text-green-600" />
                    <h1 className="text-3xl font-bold">15</h1>
                    <p className="font-medium">Year Experience</p>
                </div>
                
               
            </div>
        </div>
    );
};

export default GetOffer;