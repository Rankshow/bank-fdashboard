import {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {  
   // initailizing all states
   const [id, setId] = useState("");
   const [accountName, setAccountName] = useState("");
   const [accountNo, setAccountNo] = useState("");
   const [currency, setCurrency] = useState("");
   const navigate = useNavigate();

   const handlesubmit = (e) => {
    e.preventDefault();
    const data = {id,accountName,accountNo,currency};

    // Put request
    fetch("http://localhost:5175/customers/" + empid,{
       method:"PUT",
       headers:{"content-type":"application/json"},
       body: JSON.stringify(data) 
    }).then((res) => {
        alert("Are sure, you want to submit?");
        navigate('/customerId');
    }).catch((err) => {
        console.log(err.message)
    })
}



   // state of the Id and List...
  const {empid} = useParams();
  // const [list, setList] = useState([]); 

  // useEffect hook
  useEffect(() => {
    fetch("http://localhost:5175/customers/" + empid).then((res) => {
      return res.json();
    }).then((resp) =>{
      setId(resp.id);
      setAccountName(resp.accountName)
      setAccountNo(resp.accountNo)
      setCurrency(resp.currency)
    }).catch((err) => {
      console.log(err.message)
    })  
  }, [])


  
  return (
    <div className='max-w-4xl mx-auto'>
    <form onSubmit={handlesubmit}>
    <h1 className='text-2xl font-bold mx-[3.5em] text-red-800'>Edit Customers Accounts</h1>
    <div className='pt-4 ml-1'>
           <label htmlFor="firstName" className='text-gray-500 font-bold text-[20px] tracking-wider'>Id</label></div>
         <div><input value={id} disabled="disabled" onChange={(e) => setId(e.target.value)} type="number" placeholder='Id number' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[30rem] text-[22px]'/>
         </div> 

         {/* ================= Account Name =================== */}
         <div className='pt-5 mt-1.3 ml-1'>
           <label htmlFor="Account Name" className='text-gray-500 font-bold text-[20px] tracking-wider'>Account Name</label></div>
         <div><input value={accountName} onChange={(e) => setAccountName(e.target.value)} type="text"  placeholder='Account Name' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[30rem] text-[22px]'/>
         </div>

         {/* ================= Account Number =================== */}
         <div className='pt-5 mt-1.3 ml-1'>
           <label htmlFor="Account Number" className='text-gray-500 font-bold text-[20px] tracking-wider'>Account Number</label></div>
         <div><input value={accountNo} onChange={(e) => setAccountNo(e.target.value)} type="number" placeholder='Account Number' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[30rem] text-[22px]'/>
         </div>

         {/* ================= currency =================== */}
         <div className='pt-5 mt-1.3 ml-1'>
           <label htmlFor="lastName" className='text-gray-500 font-bold text-[20px] tracking-wider'>Currency</label></div>
         <div><input value={currency} onChange={(e) => setCurrency(e.target.value)} type="text" name='lastname' placeholder='Your Last name' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[30rem] text-[22px]'/>
         </div>
         <div className='ml-3 mt-2'>
           <button type='submit' className='bg-black text-white py-3 px-3 m-2 rounded-md hover:opacity-90'>Save</button>
          <Link to="/customerID"><button className='bg-red-800 text-white py-3 px-3 m-2 rounded-md hover:opacity-90'>Back</button></Link>
         </div>
   </form>
   </div>
  )
}

export default EmpEdit;