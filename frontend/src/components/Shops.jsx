import React,{useState,useEffect} from "react";
import '../components/RightBar';
import './shops.css';
import shopImg from "../assets/shops_img.png"
import velocare from "../assets/velocare.png"
import location from "../assets/location.png";
import star2 from "../assets/star2.png";
import tickmark from "../assets/tickmark.png";
import { useNavigate } from "react-router-dom";
import Rightbar from "../components/RightBar";



function Shops() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleViewButtonClick = () => {
        navigate("/shopdashboard");
    }
    useEffect(() => {
        // Your logic to check if user is logged in (e.g., checking session, local storage, etc.)
        const userIsLoggedIn = checkIfUserIsLoggedIn(); // Implement this function
    
        // Update state based on whether user is logged in
        setIsLoggedIn(userIsLoggedIn);
      }, []);
    
      // Function to check if user is logged in (replace this with your actual authentication logic)
      const checkIfUserIsLoggedIn = () => {
        // Your authentication logic here (e.g., checking session, local storage, etc.)
        // Return true if user is logged in, false otherwise
        // Example:
        return localStorage.getItem("token") ? true : false;
      };
    return (
        <div className="shops-container">
       
       {isLoggedIn && <Rightbar />}
            <div className="image-section">
                <img src={shopImg} className="full-width-image" />

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
                    <div className="rectangle-container">
                        <div className="top-rectangle"> </div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <p className="view-text" onClick={handleViewButtonClick}>VIEW</p>

                        </div>
                    </div>
                </div>
                <div className="sub-cards-container">
                    <div className="rectangle-container">
                        <div className="top-rectangle"></div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <p className="view-text" onClick={handleViewButtonClick}>VIEW</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="see-all-container">
                <p className="see-all-text">See all</p>
                <div className="sub-cards">
                    <div className="sub-cards-container">
                        <div className="top-rectangle"> </div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <p className="view-text" onClick={handleViewButtonClick}>VIEW</p>

                        </div>
                    </div>
                    <div className="sub-cards-container">
                        <div className="top-rectangle"></div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <p className="view-text" onClick={handleViewButtonClick}>VIEW</p>

                        </div>
                    </div>
                    <div className="sub-cards-container">
                        <div className="top-rectangle"></div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <span className="view-text">VIEW</span>

                        </div>
                    </div>
                </div>
                <div className="sub-cards-row2">
                    <div className="sub-cards">
                        <div className="sub-cards-container">
                            <div className="top-rectangle"> </div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-cards-row3">
                    <div className="sub-cards">
                        <div className="sub-cards-container">
                            <div className="top-rectangle"> </div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-cards-row4">
                    <div className="sub-cards">
                        <div className="sub-cards-container">
                            <div className="top-rectangle"> </div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                        <div className="sub-cards-container">
                            <div className="top-rectangle"></div>
                            <div className="bottom-rectangle">
                                <div className="velocare-get-direction">

                                    <div class="column">

                                        <p>No 24 Main Street,
                                            Piyagama</p>
                                        <p>+94 26 555 4623</p>
                                        <p>
                                            <img src={location} alt="Location Image" />
                                            <a href="#" className="direction-link">Get Direction</a>
                                        </p>

                                    </div>
                                </div>
                                <img src={velocare} />
                                <span className="velocare-txt">Velocare</span>


                                <div className="stars2">4.8
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                    <img src={star2} alt="Star" className="star" />
                                </div>
                                <div class="details-content">
                                    <p>Opens daily 8.00 AM - 6.00 PM</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                    <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                                </div>
                                <span className="view-text">VIEW</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="show-more-button-container">
                    <button className="show-more-button">Show More</button>
                </div>
                <div className="shop-bottom-text">
                    Discover the best bike service shops near you! Explore a curated list of trusted and reliable service providers on the BikePulse<br></br> platform. From quick repairs to top-notch maintenance, our featured shops are here to keep your ride in peak condition. <br></br>Scroll through and find the perfect match for your biking needs!
                </div>

            </div>
        </div>
    );
}

export default Shops;