import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EmpDetail = () => {
  // state of the Id and List...
  const {empid} = useParams();
  const [list, setList] = useState([]); 

  // useEffect hook
  useEffect(() => {
    fetch("http://localhost:5175/customers/"+empid).then((res) => {
      return res.json();
    }).then((resp) =>{
      setList(resp)
    }).catch((err) => {
      console.log(err.message)
    })  
  }, [])

  // Rendering the account details to the DOM
  return ( 
    <>
    <div className='max-w-4 mx-auto '>
      <h1 className='text-3xl font-bold text-center mb-3'>Customer Account Informations</h1>
      { list &&
       <div className='flex justify-center p-3 text-2xl'>
        <div className='border border-s-violet-200 rounded-md py-5 px-5'>
        <h1 className='p-3'>Account Name : <span className='font-bold'>{list.accountName}</span></h1>
          <h1 className='p-3'>Account Number : <span className='font-bold'>{list.accountNo}</span></h1>
          <h1 className='p-3'>Currency : < span className='font-bold'>{list.currency}</span></h1>
          <Link to='/customerId'><button className='hover:bg-red-300 hover:text-black bg-gray-800 text-white py-3 px-5 rounded-md'>Back to account</button></Link>
          </div>
      </div>
        }
    </div>
    </>
  )
}

export default EmpDetail;