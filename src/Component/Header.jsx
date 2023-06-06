import React, { Fragment } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';


const Header = () => {
  return (
    <>
     <div className='bg-white flex items-center justify-between h-20 px-6 text-xl'>
       <div className='text-[2.2em] font-bold tracking-wider '>INTERNET BANKING</div>
       <div className='flex items-center space-x-8'>
       <Popover className="relative">
        {({ open }) => (
          <>
          {/* +++++++========================================= Helps popup ================================================================== */}
            <Popover.Button
             className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none inline-flex items-center')}
            >
             <QuestionCircleOutlined />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"   
            >
                <Popover.Panel className="absolute right-0 z-11 mt-2.5 w-80">
               <div className='bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 px-3 cursor-pointer py-2.5'>
                 <strong>Helps</strong> 
                <p className='text-[.9em] mt-1 py-1'>This is help feedback</p> 
              </div> 
              </Popover.Panel>
            </Transition>
            </>
          )}
          </Popover>
           <Popover className="relative">
        {({ open }) => (
          <>
          {/* ++++++++++++++++++++++++++++++++++ Notification popup ++++++++++++++++++++================================ */}
            <Popover.Button
             className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none inline-flex items-center')}
            >
          <FontAwesomeIcon icon={faBell} />
 
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"   
            >
                <Popover.Panel className="absolute right-0 z-11 mt-2.5 w-80">
               <div className='bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 px-3 cursor-pointer py-2.5'>
                 <strong>Notification</strong> 
                <p className='text-[.9em] mt-1 py-1'>Empty notification yet!</p> 
              </div> 
              </Popover.Panel>
            </Transition>
            </>
          )}
          </Popover>
       </div>
     </div>
    </>
  )
}
export default Header;
