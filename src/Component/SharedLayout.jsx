import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Header from './Header';


// =====Layout of all pages===============
const Layout = () => {
  return (
     <>
      <div className='flex h-screen w-screen bg-neutral-100 overflow-hidden'>
          <Sidebar />
          <div className='flex-1'>
          <Header /> 
            <div className='my-[4em]'>
            <Outlet />
            </div>
          </div>
          
           
      </div>
      </>
  )
}

export default Layout;