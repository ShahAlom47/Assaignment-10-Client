import { FaRegCircleUser } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth Provider/AuthProbider";
import { Helmet } from "react-helmet";

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(true);
    const [themData,setThemeData]=useState(null)
   

    const [loadedUsers, setLoadedUsers] = useState([])
    console.log(loadedUsers);
    useEffect(() => {

        fetch('https://assaignment-10-server-sage.vercel.app/user')
            .then(res => res.json())
            .then(data => setLoadedUsers(data))

    }, [])






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



    const logoutHandel = () => {

        userLogOut()
            .then()
            .catch()

    }

    useEffect(()=>{
        const themeData=  localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',JSON.parse(themeData) )
        setThemeData(JSON.parse(themeData))
    },[theme])
   
    const themeControl = () => {      
        setTheme(!theme)
    theme ?  localStorage.setItem('theme',JSON.stringify('dark')):localStorage.setItem('theme',JSON.stringify('light'))

    }


   


    const navi = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/allSpot'}><li><a>All Tourists Spot</a></li></NavLink>
        {
            user && <>
                <NavLink to={'/addSpot'}><li><a>Add Tourists Spot</a></li></NavLink>
                {/* {
                   user.email==='sahalom4729@gmail.com'?<NavLink to={'/addCountry'}><li><a>Add Countries</a></li></NavLink>:''
                } */}

                <NavLink to={'/myList'}><li><a>My List </a></li></NavLink>
                <label onClick={themeControl} className="flex cursor-pointer gap-2 items-center ml-3">

                    {
                       themData==='light'? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                       
                     :  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        
                    }
                    
                </label>
            </>
        }

    </>



    return (


        <div>

            <Helmet>
                <title>Trek Trove | Navbar</title>
            </Helmet>

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
                        <Link to={'/'}>  <button className="flex items-center pl-0 font-bold  text-xl md:text-2xl lg:text-2xl" >Trek<span className="text-green-500">T</span>rove</button> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold font-mont">
                            {navi}

                        </ul>
                    </div>

                    <div className="navbar-end">



                        {user ? <div className="flex items-center">
                            <div className="dropdown dropdown-end "  >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                        {
                                            user ? <img src={user?.photoURL} alt="" /> : <FaRegCircleUser className="w-full h-full text-gray-300"></FaRegCircleUser>
                                        }
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100  rounded-lg border-2 text-center">

                                    <p className="justify-center text-xl font-medium">
                                        {user?.displayName}
                                    </p>

                                    <p className="justify-center text-lg mb-4">
                                        {user?.email}
                                    </p>
                                    <Link to={'/dashBoard'}><button className=" btn btn-sm my-3 rounded-sm mx-auto">Go To Dashboard</button></Link>


                                    <li  ><button onClick={logoutHandel} className="btn btn-sm rounded-sm ml-3 bg-[#3fb232] border-none ">LogOut</button></li>
                                </ul>

                            </div>


                        </div>

                            : <>
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