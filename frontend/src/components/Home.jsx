import React, { useEffect, useRef } from 'react';
import './Home.css'; 
import card1 from "../assets/service1.jpg";
import reservenow from "../assets/reserve_now.png"
import registershop from "../assets/register_shop.png"
import $ from 'jquery';
import 'jquery.counterup';
import Waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import person1 from "../assets/person1.png";
import ellie from "../assets/Ellie_Anderson.jpg"
import john from "../assets/John_Morgan.jpg"
import nia from "../assets/Nia_Adebayo.jpg"
import rigo from "../assets/Rigo_Louie.jpg"


//import '../../node_modules/swiper/swiper-bundle.min.js';
//import '../../node_modules/swiper/swiper-bundle.min.css';

//import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


//import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import service1 from '../assets/mobile_app.png';
import backgroundclip from '../assets/vid.mp4';








function Home() {

  useEffect(() => {
    const swiper = new Swiper('.slide-content', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
    return () => {
      swiper.destroy(); 
  };
}, []);
  return (
    <div className='homen-page-container'>
   
    <div className='homen-banner'>
    <div className='homen-container'>
    <div className='homen-text'>
        <h1>Motor Bike Service Reservation Center</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo.<br></br> Quisque rhoncus, tortor et facilisis pharetra, lorem <br></br>leo sodales nulla, eget cursus dolor dolor nec nisi. Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper. <br></br>Integer sit amet libero non massa vestibulum sagittis.<br></br> Fusce rutrum sapien vel felis posuere, vel tempor sapien consequat. Integer gravida nec ligula ut aliquet. Etiam vestibulum felis non justo posuere eleifend.</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="card">
        <div className="img-box">
          <img src={card1} alt='Card1' />
        </div>
        <h1 className='card-heading'>Heading two</h1>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="card">
        <div className="img-box">
          <img src={card1} alt='Card1' />
        </div>
        <h1 className='card-heading'>Heading three</h1>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
    </div>
    <div className='home-about-container'>
    <div className='parallax-1'>
    <div className='parallax-inner'>
    <div className='home-about-text'>
      <h1>About Us<br></br><span>WE OVER 20 YEARS EXPERIENCE</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Nulla facilisi. Integer at dolor vitae turpis placerat convallis nec id justo.<br></br> Quisque rhoncus, tortor et facilisis pharetra, lorem leo sodales nulla, eget cursus dolor dolor nec nisi.<br></br> Vivamus interdum ligula et justo cursus, nec bibendum metus ullamcorper.<r></r> Integer sit amet libero non massa vestibulum sagittis. Fusce rutrum sapien vel felis posuere, <br></br>vel tempor sapien consequat. Integer gravida nec ligula ut aliquet. Etiam vestibulum felis non justo posuere eleifend.</p>
    </div>
    <button className='homeabout-button'>ABOUT US</button>

 
    </div>
    </div>
    </div>
    <div className='counter-up' >
      <div className='counter-content'>
      <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-history'></i> </div>
        <p className='counter'>724</p>
        <p className='counter-text'>Working hours</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-history'></i> </div>
        <p className='counter'>724</p>
        <p className='counter-text'>Working hours</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-gift'></i> </div>
        <p className='counter'>120</p>
        <p className='counter-text'>Award Recieved</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-users'></i> </div>
        <p className='counter'>190</p>
        <p className='counter-text'>Happy Customers</p>
        </div>
      </div>
    </div>
    <div className='flipping-cards-container'>
    
        <div className="center">
          <div className="front-face">
            <div className="contents front">
              <p>David Smith</p>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="back-face">
            <div className="contents back">
              <h2>CodingNepal</h2>
              <span>Follow Me</span>
              <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="front-face">
            <div className="contents front">
              <p>David Smith</p>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="back-face">
            <div className="contents back">
              <h2>CodingNepal</h2>
              <span>Follow Me</span>
              <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
    
   
    </div>
    <p className='testimonial'>Testimonials</p>
    <p className='testimonial-client-text'>WHAT ARE CLIENTS SAY</p>
    <div className="wrapper-testamonial">

      <div className="box-testamonial">
      <FontAwesomeIcon icon={faQuoteLeft} className="quote" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
        <div className="content-testamonial">
          <div className="info-testamonial">
            <div className="name-testamonial">John Doe</div>
            <div className="job-testamonial">Job Title</div>
            <div className="stars-testamonial">
            <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="image-testamonial">
            <img src={card1} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="box-testamonial">
      <FontAwesomeIcon icon={faQuoteLeft} className="quote" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
        <div className="content-testamonial">
          <div className="info-testamonial">
            <div className="name-testamonial">John Doe</div>
            <div className="job-testamonial">Job Title</div>
            <div className="stars-testamonial">
            <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          </div>
          <div className="image-testamonial">
            <img src={card1} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="box-testamonial">
      <FontAwesomeIcon icon={faQuoteLeft} className="quote" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
        <div className="content-testamonial">
          <div className="info-testamonial">
            <div className="name-testamonial">John Doe</div>
            <div className="job-testamonial">Job Title</div>
            <div className="stars-testamonial">
            <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          </div>
          <div className="image-testamonial">
            <img src={card1} alt="Profile" />
          </div>
        </div>
      </div>
      
    </div>
    <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={person1} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={ellie} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={rigo} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={nia} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={john} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>  
        
          
        </div>
        <div className='parallax-1'>
          <div className='parallax-inner'>
          <div className='service-cards-container'>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Instant Motor Bike Repair</p>
          <i class="fa fa-wrench fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
         
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Easy Reservation through Mobile App</p>
          <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Flexible Payment Options </p>
          <i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Live Chat Box</p>
          <i class="fa fa-comments fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Progress Tracking</p>
          <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Filtering Feature</p>
          <i class="fa fa-filter fa-lg" aria-hidden="true"></i>
          <p>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
        </div>

          </div>
        </div>
        <div className='video-container'>
        <video autoPlay loop muted plays-inline src={backgroundclip} className='background-clip'>
          <source src={backgroundclip} type='video/mp4'/>
        </video>
        <div className='video-content'>
          <h1>Explore More</h1>
          <a href='#' >Start Searching</a>
        </div>

        </div>

        
        
    </div>



  );
}




export default Home;
