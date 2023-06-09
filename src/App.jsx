import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import CustomerID from "./Component/CustomerID";
import CreateUser from "./Component/CreateUser";
import Confirmation from "./Component/Confirmation";
import EmpCreate from "./Component/EmpCreate";
import Logout from "./Component/logout";
import Layout from "./Component/SharedLayout";
import Dashboard from "./Component/Dashboard";
// import EmpEdit from "./Component/EmpEdit";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="CustomerID" element={<CustomerID />} />
          <Route path="CreateUser" element={<CreateUser />} />
          <Route path="/customers/create" element={<EmpCreate />} />
          {/* <Route path="/customers/detail/:empid" element={<EmpDetail />} />
          <Route path="/customers/edit/:empid" element={<EmpEdit />} /> */}
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
