import { useEffect, useState } from "react";


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';


const AboutAU = () => {
    const [client, setClient] = useState([])

    useEffect(() => {

        fetch('https://assaignment-10-server-sage.vercel.app/client')
            .then(res => res.json())
            .then(data => setClient(data))
    }, [])

 
    const [windowSize, setWindowSize] = useState(4);

      console.log(windowSize);

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth<= 640){
                setWindowSize(1)
            }
           else if(window.innerWidth<= 864 && window.innerWidth >640){
                setWindowSize(2)
            }
            else{
                setWindowSize(4)
            }
        //   setWindowSize(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    



    return (
        <div className="relative my-16 h-scree overflow-hidden lg:p-12 md:p-8 p-5">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/1LVy56F/austin-wehrwein-7-Mu0-COMi-U-unsplash.jpg')" }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 p-">
                <div>
                    <h1 className="text-4xl mb-4 text-white font-bold">What Our Client Say About Us</h1>
                    <p className="text-gray-100 font-medium lg:w-6/12">Seamless bookings, exceptional service. Exceeded expectations. Memorable experiences guaranteed. Highly recommended for unforgettable journeys.</p>
                </div>
                <div className="">
                    <Swiper
                        modules={[Virtual, Navigation, Pagination]}

                        slidesPerView={windowSize}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        virtual
                        className="my-10"
                    >
                        {client.map((data, index) => (
                            <SwiperSlide key={data._id} virtualIndex={index}>
                                <div className="card  bg-[#00152A] hover:bg-slate-200 text-white hover:text-gray-700 rounded-lg h-80 ">
                                    <div className="card-body p-5">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10">
                                                <img className="w-full h-full rounded-full" src={data.imageURL} alt="" />
                                            </div>
                                            <div>
                                                <h1 className="text-lg font-semibold"> {data.client_name}</h1>
                                                <p className=" ">{data.rating}    
                                                {Array.from({ length: data.rating }).map((data, index) => (
                                                    <span key={index} className="text-green-700">★</span>
                                                ))}
                                                </p>
                                            </div>
                                        </div>
                                        <p>{data.description}</p>

                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>

            </div>
        </div>

    );
};

export default AboutAU;