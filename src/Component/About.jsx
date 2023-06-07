import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {PlusCircleOutlined} from '@ant-design/icons';
import { UnorderedListOutlined } from '@ant-design/icons';
import { data } from '../Data/data';


const About = () => {
  return (
    <>
    <div className='mx-8'>
     <h1 className='text-2xl font-bold tracking-wider my-3'>Existing Users</h1>
        <div className='flex space-x-5'>
          {/* ====+++++++++++++=== Search input===++++++++++++++++ */}
           <div className='relative'>
           <SearchOutlined className='text-[20px] text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input type="text" placeholder='Search all data' className='focus:outline-none active:outline-none h-12 w-[50rem] border border-grey-300 rounded-lg pl-11 pr-4' /></div>
            {/* =========------+++++ Add New Users =+++++++++====== */}
           <div className='relative'>
           <PlusCircleOutlined className='text-[20px] text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input type="text"  placeholder='Add New user' className='focus:outline-none active:outline-none border border-gray-300 rounded-lg h-12 pl-11 pr-6'/></div>
            {/* =========+++++++++ Action ====+++++++++++++++ */}
        <input type="text"  placeholder='Action' className='focus:outline-none active:outline-none border border-grey-300 rounded-lg h-12 pl-11 pr-6'/>
        <UnorderedListOutlined className='text-[2.8rem] text-gray-500'/>
        </div>
        <div>
        </div>
    <div>
       <table className='my-5 w-[86.5rem]'>
                <thead className='bg-blue-800  text-xl text-white'>
                  <tr>
                    <th className='px-9 py-2'>Firstname</th>
                    <th className='px-9 py-2'>Lastname</th>
                    <th className='px-9 py-2'>Email</th>
                    <th className='px-9 py-2'>Phone No</th>
                    <th className='px-9 py-2'>Username</th>
                    <th className='px-9 py-2'>No of Account</th>
                    <th className='px-9 py-2'>Action</th>
                  </tr>
                </thead>
                { data.map((list) =>{
                  return(
                  <tbody className='text-xl text-center border-separate border-spacing-2 snap-y'>
                    <tr key={list.id} className='hover:bg-gray-300'>
                    <td className='py-2'>{list.LastName}</td>
                    <td >{list.firstName}</td>
                    <td>{list.Email}</td>
                    <td>{list.PhoneNumber}</td>
                    <td>{list.UserName}</td>
                    <td>{list.NumberOfAccount}</td>
                    <td>{list.Action}</td>
                    </tr>
                  </tbody>
                  )
                  })
                }
        </table>     
    </div>
    </div>
    </>
  )
}

export default About