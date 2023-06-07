import React from 'react';
import { schemaIndex } from "../SchemaContainer/SchemaIndex";
import { Formik, Form } from 'formik';


const CreateUser = () => {

  // Initial valiues of the form
 const initialValues= {
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    phoneNumber: "",
    memorableWord: "",
    deliverymethod: "",
 }
 
//  handlesubmit
 const handleSubmit = (values, helpers) => {
  console.log("submitte")
 } 

//  =+++++++++++++++++++============================== Rendering to the Dom =+=============================================
  return (
    <div className='max-w-4xl mx-auto -mt-8'>
       {/*+++++++++++++++++++++++++ Form ++++++++++++++++++++++++ */}

          <Formik initialValues={initialValues} validationSchema={schemaIndex} onSubmit={handleSubmit}>

        {props => {
          console.log(props)
          return (
          <Form >
            <div className='flex justify-evenly'>
              <div>
                <div>
                <h1 className='text-[1.3em] font-bold -mt-4'>Create User</h1>
                </div>
                {/* +++++++++++++++++++ FirstName ++++++++++++++++++ */}
              <div className='pt-4 -mt-2 ml-1'>
                <label htmlFor="firstName" className='text-gray-500 font-bold text-[20px] tracking-wider'>First Name</label></div>
              <div><input type="text" name='firstname' placeholder='Your First name' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.firstname}
                onChange={props.handleChange} onBlur={props.handleBlur}
              />
              {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {props.errors.firstname && props.touched.firstname && <p className='text-red-800 font-bold mt-1'>{props.errors.firstname}</p>}
              </div>

              {/* ================= Last Name =================== */}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="lastName" className='text-gray-500 font-bold text-[20px] tracking-wider'>Last Name</label></div>
              <div><input type="text" name='lastname' placeholder='Your Last name' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.lastname} onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.lastname && props.touched.lastname && <p className='text-red-800 font-bold mt-1'>{props.errors.lastname}</p>}
              </div>

              {/* +++++++++++++++++++++++++++++++++++++++++++++ MIDDLE NAME ++++++++++++++++++++*/}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="middlename" className='text-gray-500 font-bold text-[20px] tracking-wider'>Middle Name</label></div>
              <div><input type="email" name='middlename' placeholder='Enter your name' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.middlename} onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.middlename && props.touched.middlename && <p className='text-red-800 font-bold mt-1'>{props.errors.middlename}</p>}
              </div>

              {/* ++++++++++++++++++ Email +++++++++++++++++++ */}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="email" className='text-gray-500 font-bold text-[20px] tracking-wider'>Email</label></div>
              <div><input type="email" name='email' placeholder='Enter your email' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.email}onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.firstname && props.touched.firstname && <p className='text-red-800 font-bold mt-1'>{props.errors.firstname}</p>}
              </div>

              {/* +++++++++++++=======================+++ Phone Number ++++++==================================++++++++++++ */}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="phoneNumber" className='text-gray-500 font-bold text-[20px] tracking-wider'>Phone Number</label></div>
              <div><input type="number" name='phoneNumber' placeholder='Your Phone number' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.phoneNumber} onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.phoneNumber && props.touched.phoneNumber && <p className='text-red-800 font-bold mt-1'>{props.errors.phoneNumber}</p>}
              </div>

              {/* +++++++++++++++++ Memorable word ++++++++++++++++++ */}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="memorableWord" className='text-gray-500 font-bold text-[20px] tracking-wider'>Memorable word</label></div>
              <div><input type="text" name='memorableWord' placeholder='Memorable word e.g.mum etc.' className='focus:outline-none active:outline-none border border-gray-400 rounded-lg pl-6 h-12 w-[20rem] text-[22px]' value={props.values.memorableWord} onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.memorableWord && props.touched.memorableWord && <p className='text-red-800 font-bold mt-1'>{props.errors.memorableWord}</p>}
              </div>

              {/* ++++++++++++++++ Delivery method +++++++++++++++++ */}
              <div className='pt-5 -mt-4 ml-1'>
                <label htmlFor="deliverymethod" className='text-gray-500 font-bold text-[20px] tracking-wider'>Delivery method</label></div>
              <div><input type="text" name='deliverymethod' placeholder='Enter your delivery method' className='focus:outline-none active:outline-none border border-gray-400 text-[22px] rounded-lg pl-6 h-12 w-[20rem]' value={props.values.deliverymethod} onChange={props.handleChange} onBlur={props.handleBlur} />
               {/* +++++++++++++++++++++++++++++++ DISPLAYED ERROR MESSAGE ++++++++++++++++++++++++++++++++++++++++++++++++ */}
               {props.errors.deliverymethod && props.touched.deliverymethod && <p className='text-red-800 font-bold mt-1'>{props.errors.deliverymethod}</p>}
              </div>


              <button className='bg-slate-900 hover:opacity-90 rounded-md mt-3 w-[20rem] py-3 tracking-wider px-2 text-white'  type='submit'>Submit</button>
              </div>
               <div className='mt-7'>Confirmation detailas</div>
            </div>
          </Form>
          )
        }}
          </Formik>
    </div>
  )
}

export default CreateUser;