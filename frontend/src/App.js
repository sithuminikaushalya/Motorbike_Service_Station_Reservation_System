

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
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Shops from "./components/Shops";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shops" element={<Shops />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
