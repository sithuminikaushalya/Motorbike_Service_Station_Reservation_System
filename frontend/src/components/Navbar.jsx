import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './Navbar.css';
import logoImage from '../../src/assets/bike2.png';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';




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
                <Link to="/login" className="login-button" style={{ textDecoration: 'none' }} >LOGIN</Link>
                <ProfileIcon className="profile" />
            </div>
            
        </div>
    );
}


  export default Navbar;
  
  