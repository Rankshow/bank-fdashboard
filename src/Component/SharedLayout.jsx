import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';


// =====Layout of all pages===============
const Layout = () => {
  return (
     <>
      <div className='flex flex-row h-screen w-screen bg-neutral-100 overflow-hidden'>
          <Sidebar />
          <h1 className='py-8 px-8'>Header</h1>
            <Outlet />
      </div>
      </>
  )
}

export default Layout;