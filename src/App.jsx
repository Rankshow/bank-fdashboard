import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import NewUser from "./Component/NewUser";
import CreateUser from "./Component/CreateUser";
import Logout from "./Component/logout";
import Layout from "./Component/SharedLayout";
import Dashboard from "./Component/Dashboard";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="CreateUser" element={<CreateUser />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
