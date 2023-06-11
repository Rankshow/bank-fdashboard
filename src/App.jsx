import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import CustomerID from "./Component/CustomerID";
import CreateUser from "./Component/CreateUser";
import Confirmation from "./Component/Confirmation";
import Logout from "./Component/logout";
import Layout from "./Component/SharedLayout";
import Dashboard from "./Component/Dashboard";
import EmpCreate from "./Component/EmpCreate";
import EmpEdit from "./Component/EmpEdit";
import EmpDetail from "./Component/EmpDetail";
import EmpRemove from "./Component/EmpRemove";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />}></Route>
          <Route path="about" element={<About />} />
          <Route path="CustomerID" element={<CustomerID />}></Route>
          <Route path="/customers/create" element={<EmpCreate />}></Route>
          <Route path="/customers/edit:empid" element={<EmpEdit />}></Route>
          <Route path="/customers/detail:empid" element={<EmpDetail />}></Route>
          <Route path="/customers/remove:empid" element={<EmpRemove />}></Route>
          <Route path="CreateUser" element={<CreateUser />}></Route>
          <Route path="confirmation" element={<Confirmation />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
