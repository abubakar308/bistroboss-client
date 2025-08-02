import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/router';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './authprovider/Authprovider';


createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <Authprovider>
    <HelmetProvider>
     <div className='w-11/12 mx-auto'>
      <RouterProvider router={router} />
      </div>
     </HelmetProvider>
    </Authprovider>
   
  </StrictMode>
  ,
)
