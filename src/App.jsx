import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
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
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
