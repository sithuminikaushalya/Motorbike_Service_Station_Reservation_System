import React from "react";
import './shops.css';
import shopImg from "../assets/shops_img.png"
import velocare from "../assets/velocare.png"
import location from "../assets/location.png";
import star2 from "../assets/star2.png";


function Shops(){
    return(
       <div className="shops-container">
        <div className="image-section">
            <img src={shopImg} className="full-width-image"/>
        </div>
        <div className="main-cards-container">
            <div className="main-cards">
                <h2>Professional Services</h2>
                <p>Explore a range of professional bike services from certified technicians. Our skilled professionals are equipped to handle everything from routine maintenance to complex repairs, ensuring your bike is in top-notch condition.</p>
            </div>
            <div className="main-cards">
            <h2>Quality Parts</h2>
            <p>Discover genuine and high-quality bike parts at our shops. We offer a diverse selection of parts from trusted manufacturers, ensuring durability and performance. Upgrade your ride with top-tier components available at competitive prices.</p>

            </div>
            <div className="main-cards">
                <h2>Emergency Assistance</h2>
                <p>For urgent matters, our emergency assistance feature is at your service. Access real-time chat support for immediate help with any bike-related concerns. Our dedicated team is available 24/7 to provide quick and reliable assistance.</p>
            </div>
        </div>
        <div className="line"></div>
        <span className="come-again-text">Come Again</span>
        <div className="sub-cards">
        <div className="sub-cards-container">
            <div className="top-rectangle"> hi</div>
            <div className="bottom-rectangle">
                <img src={velocare}/>
            <span className="velocare-txt">Velocare</span>
        
            <div className="stars2">4.8
                <img src={star2} alt="Star" className="star" />
                <img src={star2} alt="Star" className="star" />
                <img src={star2} alt="Star" className="star" />
                <img src={star2} alt="Star" className="star" />
                <img src={star2} alt="Star" className="star" />
              </div>
           
            </div>
            </div>
            <div className="sub-cards-container">
            <div className="top-rectangle"> hi</div>
            <div className="bottom-rectangle">
                hi
            </div>
            </div>
        </div>
       </div>
    );
}

export default Shops;