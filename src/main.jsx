import React from 'react'
import ReactDOM from 'react-dom/client'
// import {  HelmetProvider } from 'react-helmet-async';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";


// import AuthProvider from './Auth Provider/AuthProvider';
import router from './Routes/MainRoute';
// import AuthProvider from './Auth Provider/AuthProbider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}

        <RouterProvider router={router} />
   
    {/* </AuthProvider> */}
  </React.StrictMode>,
)