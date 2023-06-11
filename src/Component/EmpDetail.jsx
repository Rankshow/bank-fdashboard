import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const EmpDetail = () => {
  const {empid} = useParams();

  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5175/customers/"+empid).then((res) => {
      return res.json();
    }).then((resp) =>{
      setData(resp)
    }).catch((err) => {
      console.log(err.message)
    })  
  }, [])

  return (
    <div>
      {
      <h1>The Customers Detail is : 
        {/* {data.} */}
        </h1>
        }
    </div>
  )
}

export default EmpDetail;