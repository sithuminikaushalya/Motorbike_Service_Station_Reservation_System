import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './navbar.css';
import logoImage from '../../src/assets/bike2.png'



function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logoImage} alt="Logo" />
                <div className="brand-text brand-text-gradient">BikePulse</div>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/aboutus" className="nav-link">About us</Link>
                <Link to="/shops" className="nav-link">Shops</Link>
                <button className="login-button">LOGIN</button>
                <i className="bi-bi-person-circle" />
            </div>
            
        </div>
    );
}


  export default Navbar;
  
  