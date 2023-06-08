import React from 'react';
import {PlusCircleOutlined} from '@ant-design/icons';


const CustomerID = () => {
  return (
    <div className='max-w-4xl mx-auto '>
      <h1 className='text-2xl text-black font-bold'>Add Customer ID & Account</h1>
      <form action="">
      <div className='mt-6'>
      <input className='h-11 w-60 rounded-md border border-solid pl-6' type="number" placeholder='Customer Id'/>
       <button type='submit' className='ml-3 text-xl tracking-wider px'><div className=''><span className='flex items-center text-gray-400 font-bold py-2 px-2'><PlusCircleOutlined className='m-2'/>Add Customer ID</span></div></button>
       </div>
       {/* ===================== Accounts Table +++++================ */}
       <div className='max-w-4xl py-5 text-[20px]'>
        <table className='w-[50rem]'>
          <thead className=' bg-blue-950 text-white'>
            <tr>
              <th className='max-w-3xl py-3'>Accounts</th>
              <th>Accounts No</th>
              <th>Currency</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
       </div>
       </form>
    </div>
  )
}

export default CustomerID;