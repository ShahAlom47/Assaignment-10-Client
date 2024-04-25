import { Outlet  } from "react-router-dom";
import Footer from "../Shared Component/Footer";
import Navbar from "../Shared Component/Navbar";


const Root = () => {
    return (
        <div className=" max-w-7xl m-auto">
            <Navbar></Navbar>
            <Outlet ></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Root;