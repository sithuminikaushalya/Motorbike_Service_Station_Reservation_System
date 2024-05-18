

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
import Aboutus from "./components/Aboutus";
import Shops from "./components/Shops";
import Footer from "./components/Footer";
import { Provider } from 'react-redux';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ForgotPw from "./components/ForgotPw";
import FaultSuggest from "./components/FaultSuggest";
import ShopsNavbar from "./components/ShopsNavbar";
import Reservation from "./components/Reservation";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Fault from "./components/Fault";
import Cart from "./components/Cart";
import store from "./Store/Store";


//import { Navbar } from "react-bootstrap";

function App() {
  return(
    <Provider store={store}>
    <Router>
   <div>
   <Navbar/>
    
   <Routes>
   
   
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/shops" element={<Shops/>}/>
    <Route path="/login" element={<Login/>}/>
    
    <Route path="/faultsuggest" element={<FaultSuggest/>}/>
    <Route path="/reservation" element={<Reservation/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/account-setting" element={<Settings/>}/>
 
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/forgotpw" element={<ForgotPw/>}/>
    <Route path="/payment" element={<Payment/>}/>
    
    <Route path="/Fault" element={<Fault/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
   
    <Footer/>
  

   </div>
   
   </Router>
   </Provider>
   

  );
}

export default App;
