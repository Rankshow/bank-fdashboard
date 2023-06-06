import React from 'react';
import Image from "./image/first-bank-logo.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { AppstoreOutlined } from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons/lib/icons';
import { QuestionCircleOutlined } from '@ant-design/icons/lib/icons';
import { StockOutlined } from '@ant-design/icons/lib/icons';
import { LogoutOutlined } from '@ant-design/icons/lib/icons';
import { BankOutlined } from '@ant-design/icons';

// ==========sidebar layout==================
const Sidebar = () => {
  return (
    // ========= rendering all items in the sidebar============
    <div className='bg-blue-900 w-80 px-3 py-4 flex flex-col text-white text-xl font-light'>
      {/* ===========================logo image============================== */}
        <img className='w-20 mx-auto rounded-full' src={Image} alt="firstbank-logo" />
        <div className='flex-1 py-5' >
          {/* ===================== dashboard item=================== */}
          <div className='flex px-1 py-3'> 
            <Link to="/" className='flex items-center'>
              <AppstoreOutlined className='text-2xl' />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Dashboard</span>
              </Link>
          </div>
          {/*  ==================== Retail=================*/}
          <div className='flex px-1 py-3'> 
            <Link to="/about" className='flex items-center'>
              <BankOutlined className='text-2xl' />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Retail</span>
              </Link>
          </div>
          {/* ============ Existing User===================== */}
          <div className='flex px-1 py-3'> 
            <Link to="/contact" className='flex items-center'>
            <FontAwesomeIcon className='text-2xl' icon={faUserGroup} />
             <span className='ml-3 hover:text-neutral-300  hover:underline'>Existing User</span>
              </Link>
          </div>
          {/* =================New User============================= */}
          <div className='flex px-1 py-3'> 
            <Link to="/NewUser" className='flex items-center'>
            <FontAwesomeIcon className='text-2xl' icon={faUser} style={{color: "#ae1504"}} />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>New User</span>
              </Link>
          </div>
          {/* =============== Corporate================================= */}
          <div className='flex px-1 py-3'> 
            <Link to="/contact" className='flex items-center'>
            <StockOutlined className='text-2xl'/>
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Corporate</span>
              </Link>
          </div>
          {/* ====================+Settings ++++===================== */}
          <div className='flex px-1 py-3'> 
            <Link to="/contact" className='flex items-center'>
            <SettingOutlined className='text-2xl' />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Settings</span>
              </Link>
          </div>
          </div>
         
          <hr className='py-2 w-5/6'/>
          {/* ================== help================== */}
          <div className='flex px-1 py-3'> 
            <Link to="/contact" className='flex items-center'>
            <QuestionCircleOutlined className='text-2xl' />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Help & Getting Started</span>
              </Link>
          </div>
          {/* ================== Logout ==================== */}
          <div className='flex px-1 py-3'> 
            <Link to="/contact" className='flex items-center'>
            <LogoutOutlined className='text-2xl' />
             <span className='ml-3 hover:text-neutral-300 hover:underline'>Logout</span>
              </Link>
          </div>
       
      </div>
  )
}

export default Sidebar