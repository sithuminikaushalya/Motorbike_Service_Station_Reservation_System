import React from 'react';
import './Parallax.css'; 
import card1 from "../assets/service1.jpg";
import bike8 from "../assets/bike8.jpg";
import reservenow from "../assets/reserve_now.png"
import registershop from "../assets/register_shop.png"
import srilanka from "../assets/SriLanka.png"

function Parallax() {
  return (
    <div className='homen-page-container'>
   
    <div className='homen-banner'>
    <div className='homen-container'>
    <div className='homen-text'>
        <h1>Motor Bike Service Reservation Center</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo. Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. Integer sit amet libero non massa vestibulum sagittis. Fusce rutrum sapien vel felis posuere, vel tempor sapien consequat. Integer gravida nec ligula ut aliquet. Etiam vestibulum felis non justo posuere eleifend.</p>
        <div className='homen-button'>
           
            <a href='#'>REGISTER SHOP
            <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" /></a>
            <a href='#'>RESERVE NOW
            <img src={reservenow}  alt="Reserve Now Icon" className="reserve-now-icon" /></a>
        </div>
    </div>
    
    </div>
    </div>
    <div className="cards-container">
      <div className="card">
        <div className="img-box">
          <img src={card1} alt='Card1' />
        </div>
        <h1 className='card-heading'>Heading one</h1>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo. Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. Integer sit amet libero non massa vestibulum sagittis
        </p>
      </div>
      <div className="card">
        <div className="img-box">
          <img src={card1} alt='Card1' />
        </div>
        <h1 className='card-heading'>Heading two</h1>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo. Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. Integer sit amet libero non massa vestibulum sagittis
        </p>
      </div>
      <div className="card">
        <div className="img-box">
          <img src={card1} alt='Card1' />
        </div>
        <h1 className='card-heading'>Heading three</h1>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo. Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. Integer sit amet libero non massa vestibulum sagittis
        </p>
      </div>
    </div>
    <div className='home-about-container'>
    <div className='home-about-text'>
      <h1>About Us<br></br><span>WE OVER 20 YEARS EXPERIENCE</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo. Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. Integer sit amet libero non massa vestibulum sagittis. Fusce rutrum sapien vel felis posuere, vel tempor sapien consequat. Integer gravida nec ligula ut aliquet. Etiam vestibulum felis non justo posuere eleifend. Duis ultricies convallis leo, non dignissim risus malesuada quis. Nulla facilisi. Aliquam at ultricies lacus. Integer varius nec odio a ullamcorper. Sed vel mi nec urna consequat faucibus nec et justo.</p>
    </div>

    
    <div className='home-about-image'>
      <img src={bike8} alt='About Image'/>
    </div>
    </div>
    </div>
  );
}

export default Parallax;
