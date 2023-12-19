

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoImage from '../../src/assets/bike2.png'
import './Navbar.css';
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" style={{ backgroundColor: '#007BFF' }}>
    <a className="navbar-brand" style={{ fontFamily: 'Poppins', fontWeight: 'SemiBold', fontSize: '30px' }} >
          <img src={logoImage} alt="Logo" width="87" height="69" className="d-inline-block align-top me-2" />
            BikePulse
          </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutus" className="nav-link">
          
            Aboutus
          </Link>
          <Link to="/shops" className="nav-link">
            Shops
          </Link>
          <Link to="/login" className="nav-link">
            Login
            <i className="fa fa-user-plus me-2"></i>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


