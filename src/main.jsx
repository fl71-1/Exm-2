import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './component/Navbar';
import Home from './pages/Home'; 
import Footer from './component/Footer';
import MyBook from './pages/MyBook';
const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
      <Navbar/>
     <Login/>,
     </>
    )
      
  },
   {
    path: "/",
    element:(
      <>
      <Navbar/>
     <Login/>,
     </>
    )
      
  },
  {
    path: "/Login",
    element: (
    <>
    <Navbar/>
    <Login/>,
    
    </>
    )
  },
  {
    path: "/Signup",
    element: (
      <>
      <Navbar/>
      <Signup/>,
      </>
      )
  },
  {
    path: "/Home",
    element: (
      <>
      <Navbar/>
      <Home/>
      <Footer/>
      </>
      )
  },
  {
    path: "/MyBook",
    element: (
      <>
      <Navbar/>
      <MyBook/>
      <Footer/>
      </>
      )
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
   </StrictMode>,
)
