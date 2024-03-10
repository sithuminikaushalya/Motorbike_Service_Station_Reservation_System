

/*import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Shops from "./components/Shops";
import Login from "./components/Login";
import Footer from "./components/Footer";
import {BrowserRouter as Route,Router,Routes } from "react-router-dom";


function App  () {
  return(
    <Router>
   <div>
   <Navbar/>
   <Routes>
   
   
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/shops" element={<Shops/>}/>
   
   
    </Routes>
    <Footer/>
   </div>
   </Router>

  );
}

export default App;*/

import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import Shops from "./components/shops";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Register2 from "./components/Register2";
import Register3 from "./components/Register3";
import ForgetPw from "./components/ForgetPw";

//import { Navbar } from "react-bootstrap";

function App() {
  return(
    <Router>
   <div>
   <Navbar/>
   <Routes>
   
   
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/shops" element={<Shops/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/register2" element={<Register2/>}/>
    <Route path="/register3" element={<Register3/>}/>
    <Route path="/forgetpw" element={<ForgetPw/>}/>
   
   
    </Routes>
  

   </div>
   </Router>

  );
}

export default App;
