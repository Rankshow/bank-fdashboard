import React from 'react';
import { useState, useEffect } from 'react';
import {PlusCircleOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';


const CustomerID = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  
  useState(() => {
    fetch("http://localhost:5175/customers").then((res) => {
      return res.json();
    }).then((resp) =>{
      setData(resp)
    }).catch((err) => {
      console.log(err.message)
    })
  }, []);

  // handleDetails
  const handleDetail = (id) => {
    navigate("/customers/detail/"+id);
  };
  // handleRemove
  const handleRemove = (id) => {

  };
  // handleEdit
  const handleEdit = (id) => {

  };

  return (
    <div className='max-w-4xl mx-auto '>
      <h1 className='text-2xl text-black font-bold'>Add Customer ID & Account</h1>
      <form>
      <div className='mt-6'>
        {/* ++========================= search and Add ++++=========================== */}
      <input className='h-11 w-60 rounded-md border border-solid pl-6 outline-none' type="search" placeholder='Search Account'/>
      <Link to="/customers/create" ><button type='button' className='border border-e-6 bg-green-400 rounded-md ml-3 text-xl tracking-wider px'><div className=''><span className='flex items-center text-gray-200 font-bold py-2 px-2 hover:opacity-70'><PlusCircleOutlined className='m-2'/>Add Customer ID</span></div></button></Link>
       </div>
       {/* ===================== Accounts Table +++++================ */}
       <div className='max-w-4xl py-5 text-[20px]'>
        <table className='w-[60rem]'>
          <thead className=' bg-blue-950 text-white'>
            <tr >
              <th className='py-3 border'>Serial No</th>
              <th  className=' border'>Accounts Name</th>
              <th  className=' border'>Accounts No</th>
              <th  className=' border'>Currency</th>
              <th  className=' border'>Action</th>
            </tr>
          </thead>
          <tbody>
            { data &&
              data.map(items => (       
                <tr key={items.id} className='text-center'>
                     <td>{items.id}</td>
                    <td>{items.accountName}</td>
                    <td>{items.accountNo}</td>
                    <td>{items.currency}</td>
                    <td>
                      <button onClick={() =>handleEdit(items.id)} className='bg-green-800 py-2 m-2 p-2 rounded-md hover:opacity-90 text-white font-medium'>Edit</button>
                      <button onClick={() =>handleRemove(items.id)} className='bg-red-800 py-2 m-3 p-2 rounded-md hover:opacity-90 text-white font-medium'>Remove</button>
                     <button onClick={() =>handleDetail(items.id)} className='bg-blue-800 py-2 m-3 p-2 rounded-md hover:opacity-90 text-white font-medium'>Details</button>
                    </td>
                 </tr>
              ))
            }
          </tbody>
        </table>
       </div>
       </form>
    </div>
  )
}

export default CustomerID;