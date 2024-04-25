import { FaRegCircleUser } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from "react";

const Navbar = () => {

    const navi = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
    </>

    
const [visible, setVisible] = useState(true);

useEffect(() => {
  let prevSPos = window.pageYOffset;
  
  const handleScroll = () => {
    const currentSPos = window.pageYOffset;
    const isVisible = prevSPos > currentSPos;

    setVisible(isVisible);
    prevSPos = currentSPos;
    
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [visible]);

    return (


        <div>
             <div className={`className=" max-w-7xl w-full m-auto" p-0  z-50 fixed  ${visible ? 'top-0 transition-all' : '-top-20 transition-all'} duration-1000`} >

                <div className='navbar  bg-[#d8d2d260] text-gray-800 lg:px-10 md:px-10 '>



                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:px-4 px-0  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold text-gray-800 shadow bg-base-100 rounded-box w-52">
                                {navi}
                            </ul>
                        </div>
                        <Link to={'/'}>  <button className="flex items-center pl-0 font-bold  text-xl md:text-2xl lg:text-2xl" >Trek<span className="">Trove</span></button> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {navi}

                        </ul>
                    </div>

                    <div className="navbar-end">



                        <div className="flex items-center">
                            <div className="dropdown dropdown-end "  >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-content="user Name">
                                        {
                                            <FaRegCircleUser className="w-full h-full text-gray-300"></FaRegCircleUser>
                                        }
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <Link to={"/userProfile"}>    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge font-semibold  ">user name</span>
                                        </a>
                                    </li></Link>

                                    <li  ><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">LogOut</button></li>
                                </ul>

                            </div>
                            {/* <Link ><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">LogOut</button></Link> */}

                        </div>  <>
                            <Link to={'/login'}><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">Login</button></Link>
                            <Link to={'/register'}><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">Register</button></Link>
                        </>



                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>


    );
};

export default Navbar;