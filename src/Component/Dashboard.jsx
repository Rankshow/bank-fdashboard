import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

import Slides from "./slide";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl -my-4">Welcome! to our bank, we offer the best services in the world. You can trust in us with your money, capitals, savings, investments and loan.</h1>
        </div>
        <h2 className="text-blue-900 font-bold my-[1em] mx-auto text-5xl">We are <span className="bg-red-900 text-white rounded-b-lg p-2">Firstbank</span>, the best a bank for your saving.</h2>
           
        {/*==========slider effect==========  */}
        {/* <FontAwesomeIcon icon={faDocker} bounce style={{color: "#c42317", fontSize:"300px", marginTop: ".5em"}} /> */}
         <Slides />
      </div> 

    </>
  )
}
export default Dashboard;