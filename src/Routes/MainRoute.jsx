import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import AddTouristSpot from "../Pages/Add Spots/AddTouristSpot";
import PrivetRoute from "./PrivetRoute";
import SpotDetails from "../Pages/Home/SpotDetails";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
       
        {
          path: "/addSpot",
          element: <PrivetRoute><AddTouristSpot></AddTouristSpot></PrivetRoute>,
        },
        {
          path: "/allSpot",
          element: <PrivetRoute><AllTouristSpots></AllTouristSpots></PrivetRoute>,
        },
        {
          path: "/details/:id",
          element: <PrivetRoute><SpotDetails></SpotDetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:3000/spot/${params.id}`)
        },
       
        
       
      ],
    },
  ]);

  export default router;