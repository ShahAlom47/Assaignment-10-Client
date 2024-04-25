import { FaRegCircleUser } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth Provider/AuthProbider";

const Navbar = () => {

    const {user,userLogOut}=useContext(AuthContext)
    
    const [loadedUsers,setLoadedUsers]=useState([])
    useEffect(()=>{

        fetch('http://localhost:3000/user')
        .then(res=>res.json())
        .then(data=>setLoadedUsers(data))

    },[])



    

    
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



const logoutHandel=()=>{

    userLogOut()
    .then()
    .catch()

}



const navi = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/'}><li><a>All Tourists Spot</a></li></NavLink>
       {
        user&& <>
         <NavLink to={'/'}><li><a>Add Tourists Spot</a></li></NavLink>
        <NavLink to={'/'}><li><a>My List </a></li></NavLink>
        </>
       }
        <NavLink ><li><a>{loadedUsers.length}</a></li></NavLink>
    </>

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



                       {user? <div className="flex items-center">
                            <div className="dropdown dropdown-end "  >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                        {
                                           user?<img src={user?.photoURL} alt="" /> :<FaRegCircleUser className="w-full h-full text-gray-300"></FaRegCircleUser>
                                        }
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                      <li>
                                        <p className="justify-center text-xl font-medium">
                                            {user?.displayName}
                                        </p>
                                    </li>

                                    <li  ><button onClick={logoutHandel} className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">LogOut</button></li>
                                </ul>

                            </div>
                     

                        </div>
                        
                        :<>
                            <Link to={'/login'}><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">Login</button></Link>
                            <Link to={'/register'}><button className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">Register</button></Link>
                        </>
                            
                        }  



                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>


    );
};

export default Navbar;