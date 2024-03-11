import React from "react";
import footerlogo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-display">
        <div className="footer-section1">
          <img src={footerlogo} className="footer-logo" />
          <p className="section1-text">
            BikePulse is a dynamic software development team <br />
            with a global presence through offices in Canada<br /> and the
            UAE. Since 2012, we have been at the <br /> forefront of delivering
            cutting-edge web and mobile <br /> solutions, providing customized
            software to clients <br /> worldwide. Our commitment to innovation
            and<br /> quality positions BikePulse Techware Lab as a<br /> trusted
            partner, seamlessly merging technology with <br /> the excitement
            of biking.
          </p>
          <div className="followus-container">
            <p className="footer-followus">Follow Us</p>
            <img src={facebook} alt="Facebook Logo" className="footer-social-media" />
            <img src={instagram} alt="Instagram Logo" className="footer-social-media" />
            <img src={youtube} alt="Youtube Logo" className="footer-social-media" />
          </div>
        </div>
        <div className="footer-section2">
          <div className="company-resources">
            <p className="company-text">Company</p>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shops</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            <p className="resources-text">Resources</p>
            <ul className="footer-links">
              <li><a href="#">Auto Repair near me</a></li>
              <li><a href="#">Top Cities</a></li>
              <li><a href="#">All Cities</a></li>
              <li><a href="#">Shop Instructions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section3">
            <p className="footer-contactus-text">Contact Us</p>
            <div className="business-address-container">
                <p className="business-address-text">Business Address</p>
                <p className="business-address">123 Bike Lane,<br></br>Cityville, State 56789,<br></br>Sri Lanka</p>
            </div>
            <div className="cooperative-container">
                <p className="cooperative-text">Corporative Office
</p>
                <p className="business-address">BikePulse Headquarters,<br></br>456 Gear Street,<br></br>Metropolis, State 67890,<br></br>Sri Lanka</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
