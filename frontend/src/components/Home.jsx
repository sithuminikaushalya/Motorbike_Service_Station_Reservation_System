import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import ChatCircleText from "../components/ChatCircleText";
import EnvelopeSimple from "../components/EnvelopSimple";
import WeightRegular from "../components/WeightRegular";
import WeightRegularWrapper from "../components/WeightRegularWrapper";
import "./Home.css"
import logo from "../assets/Logo.png"
import mission from "../assets/Mission.png"
import vision from "../assets/Vision.png"
import srilanka from "../assets/SriLanka.png"
import bike3 from "../assets/bike3.png"
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
    return (
        <div className="home-website">
            <div className="div">
                <footer className="footer">
                    <div className="overlap">
                        <div className="group">
                            <div className="text-wrapper">Company</div>
                            <div className="text-wrapper-2">Resources</div>
                            <div className="overlap-group">
                                <div className="text-wrapper-3">Contact us</div>
                                <p className="p">© Developed by BikePulse Group IT 2023.</p>
                                <div className="group-2">
                                    <div className="text-wrapper-4">Business Address</div>
                                    <p className="element-bike-lane">
                                        123 Bike Lane,
                                        <br />
                                        Cityville, State 56789,
                                        <br />
                                        Sri Lanka
                                    </p>
                                    <div className="group-3">
                                        <p className="element">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 556 8080
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 528 9612
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bikepulse@gmail.com
                                        </p>
                                        <WeightRegularWrapper weight="regular" />
                                    </div>
                                </div>
                                <div className="group-4">
                                    <div className="overlap-group-2">
                                        <div className="group-5">
                                            <div className="text-wrapper-5">Corporative Office</div>
                                            <p className="bikepulse">
                                                BikePulse Headquarters,
                                                <br />
                                                456 Gear Street,
                                                <br />
                                                Metropolis, State 67890,
                                                <br />
                                                Sri Lanka
                                            </p>
                                            <p className="element-2">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+94 11 677 8080
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 598 9612
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; head@gmail.com
                                            </p>
                                        </div>
                                        <div className="group-6">
                                            <ChatCircleText className="phosphor-icons" />
                                            <EnvelopeSimple className="envelope-simple" color="white" />
                                            <div className="group-7" />
                                        </div>
                                    </div>
                                    <div className="group-8">
                                        <ChatCircleText className="chat-circle-text" />
                                        <EnvelopeSimple className="envelope-simple-instance" color="white" />
                                        <div className="group-9" />
                                    </div>
                                </div>
                            </div>
                            <div className="home-shops">
                                Home
                                <br />
                                Shops
                                <br />
                                Promotions
                                <br />
                                Contact Us
                                <br />
                                About Us
                            </div>
                            <p className="auto-repair-near-me">
                                Auto Repair near me
                                <br />
                                Top Cities
                                <br />
                                All Cities
                                <br />
                                Shop Instructions
                            </p>
                            <div className="overlap-2">
                                <img className="logo" alt="Logo" src={logo} />
                                <p className="text-wrapper-6">
                                    BikePulse is a dynamic software development team with a global presence through offices in Canada and
                                    the UAE. Since 2012, we have been at the forefront of delivering cutting-edge web and mobile
                                    solutions, providing customized software to clients worldwide. Our commitment to innovation and
                                    quality positions BikePulse Techware Lab as a trusted partner, seamlessly merging technology with the
                                    excitement of biking.
                                </p>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-7">Follow Us</div>
                            </div>
                        </div>
                        <div className="social-media">
                            <i className="bi bi-facebook" title="Icon circle facebook" />
                            <i className="bi bi-instagram" title="Icon circle" />
                            <i className="bi bi-youtube" title="Icon circle youtube" />
                        </div>
                    </div>
                </footer>
                <div className="overlap-3">
                    <div className="mission">
                        <div className="text-wrapper-8">Our Mission</div>
                        <p className="empowering-journeys">
                            <span className="span">
                                Empowering Journeys, Connecting Riders.
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                <br />
                                Through innovative technology and a commitment to excellence, we aim to create a community where riders
                                feel confident and inspired to explore their passion for two-wheel adventures
                            </span>
                        </p>
                        <div className="mission-image">
                            <div className="overlap-group-3">
                                <img className="hand" alt="Hand" src="hand-2.png" />
                                <img className="removal" alt="Removal" src={mission} />
                            </div>
                        </div>
                    </div>
                    <div className="vision">
                        <div className="text-wrapper-10">Our Vision</div>
                        <p className="revolutionizing">
                            <span className="span">
                                Revolutionizing Riding Experiences, One Reservation at a Time.
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                <br />
                                We envision a future where every motorbike owner experiences the thrill of the road without any concerns
                                about maintenance or service.
                            </span>
                        </p>
                        <img className="img" alt="Removal" src={vision} />
                    </div>
                </div>
                <div className="shops">
                    <img className="sri-laka-pins" alt="Sri laka pins" src={srilanka} />
                    <div className="vroom-ville">
                        <div className="overlap-4">
                            <div className="overlap-5">
                                <div className="open-details">
                                    <div className="overlap-group-4">
                                        <p className="opens-daily-AM">
                                            <span className="text-wrapper-11">
                                                Opens daily 8.00 AM - 5.00 PM
                                                <br />
                                                <br />
                                            </span>
                                            <span className="text-wrapper-12">
                                                <br />
                                            </span>
                                        </p>
                                        <div className="group-10">
                                            <p className="full-services">
                                                Full Services
                                                <br />
                                                Company Services
                                                <br />
                                                Repair &amp; Maintenance
                                            </p>
                                            <div>
                                            <i className="bi bi-check2-circle check-perspective" aria-hidden="true"/>
                                            <i className="bi bi-check2-circle-perspective" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <div className="text-wrapper-13">Locate Now</div>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <div className="text-wrapper-13">Make a Reservation</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="div-3">
                                    <span className="text-wrapper-14">
                                        No 24 Main Street,
                                        <br />
                                        Piyagama
                                        <br />
                                        +94 26 555 4623
                                        <br />
                                    </span>
                                    <span className="text-wrapper-15">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                    <span className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </span>
                                </p>
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"></i>

                            </div>
                            <div className="text-wrapper-17">VroomVille</div>
                        </div>
                    </div>
                    <div className="asphalt-motors">
                        <div className="overlap-4">
                            <div className="overlap-7">
                                <div className="open-details-2">
                                    <div className="overlap-group-6">
                                        <p className="opens-daily-AM">
                                            <span className="text-wrapper-11">
                                                Opens daily 8.30 AM - 7.00 PM
                                                <br />
                                                <br />
                                            </span>
                                            <span className="text-wrapper-12">
                                                <br />
                                            </span>
                                        </p>
                                        <div className="group-11">
                                            <p className="company-services">
                                                Company services only
                                                <br />
                                                No Repair Services
                                            </p>
                                            <div>
                                                <i
                                                    className="bi bi-check2-circle check-perspective-4"
                                                    alt="Check perspective"/>
                                                <i
                                                    className="bi bi-check2-circle check-perspective-4"
                                                    alt="Check perspective"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <div className="text-wrapper-13">Locate Now</div>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <div className="text-wrapper-13">Make a Reservation</div>
                                        </div>
                                    </div>
                                </div>
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"></i>
                                <p className="div-3">
                                    <span className="text-wrapper-14">
                                        Homagama villa Street,
                                        <br />
                                        Ambalangode-06
                                        <br />
                                        +94 11 455 4665
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                    </span>
                                    <span className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </span>
                                </p>
                            </div>
                            <div className="text-wrapper-18">Asphalt Motors</div>
                        </div>
                    </div>
                    <div className="velocare">
                        <div className="overlap-4">
                            <div className="overlap-7">
                                <div className="open-details-3">
                                    <div className="overlap-group-6">
                                        <div className="overlap-group-7">
                                            <div className="full-services-repair">
                                                Full services
                                                <br />
                                                Repair &amp; Maintenance
                                            </div>
                                            <p className="opens-daily-AM">
                                                <span className="text-wrapper-11">
                                                    Opens daily 8.00 AM - 6.00 PM
                                                    <br />
                                                    <br />
                                                </span>
                                                <span className="text-wrapper-12">
                                                    <br />
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                        
                                        <i
                                            className="bi bi-check2-circle check-perspective-6"
                                            alt="Check perspective"/>
                                           
                                        
                                        <i
                                            className="bi bi-check2-circle check-perspective-5"
                                            alt="Check perspective"
                                           
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <div className="text-wrapper-13">Locate Now</div>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <div className="text-wrapper-13">Make a Reservation</div>
                                        </div>
                                    </div>
                                </div>
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"
                                    
                                />
                                <p className="div-3">
                                    <span className="text-wrapper-14">
                                        No 64, Galle Street,
                                        <br />
                                        Colombo-06
                                        <br />
                                        +94 11 455 4665
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                    </span>
                                    <span className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </span>
                                </p>
                            </div>
                            <div className="text-wrapper-19">Volecare</div>
                        </div>
                    </div>
                    <div className="text-wrapper-20">1000+ Service Stations</div>
                    <div className="search-bar">
                        <div className="overlap-8">
                            <div className="rectangle" />
                            <img className="union" alt="Union" src="union.svg" />
                            <p className="text-wrapper-21">Search by city, District or Zip code</p>
                        </div>
                    </div>
                </div>
                <div className="promotions">
                    <p className="we-re-resetting-bike">We&#39;re resetting bike care standards.</p>
                    <p className="text-wrapper-22">One Service at a time.</p>
                    <img className="unsplash-lghmdc" alt="Unsplash lghmdc" src={bike3} />
                    <div className="overlap-9">
                        <div className="group-12">
                            <div className="overlap-group-8">
                                <img className="ellipse" alt="Ellipse" src="ellipse-5.svg" />
                                <img className="ellipse-2" alt="Ellipse" src="ellipse-6.svg" />
                                <div className="text-wrapper-23">10M+</div>
                            </div>
                            <div className="text-wrapper-24">50M+</div>
                        </div>
                        <div className="group-13">
                            <div className="overlap-10">
                                <img className="ellipse-3" alt="Ellipse" src="image.svg" />
                                <img className="ellipse-4" alt="Ellipse" src="ellipse-6-2.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper-25">Customers</div>
                    <div className="text-wrapper-26">Services</div>
                </div>
                <div className="nav-bar">
                    <div className="profile-icon-wrapper">
                        <WeightRegular className="profile-icon" color="#03045E" />
                    </div>
                    <div className="login-button">
                        <div className="overlap-group-9">
                            <div className="rectangle-2" />
                            <div className="text-wrapper-27">LOG IN</div>
                        </div>
                    </div>
                    <div className="nav-bar-details">
                        <div className="text-wrapper-28">Home</div>
                        <div className="text-wrapper-29">About us</div>
                        <p className="shops-2">
                            <span className="text-wrapper-30">&nbsp;</span>
                            <span className="text-wrapper-31">Shops</span>
                        </p>
                    </div>
                    <img className="logo-2" alt="Logo" src="image.png" />
                </div>
                <img className="below-the-nav-bar" alt="Below the nav bar" src="below-the-nav-bar.png" />
                <div className="frame">
                    <div className="vector-wrapper">
                        <i className=" bi bi-card-checklist img-2" alt="Vector"  />
                    </div>
                    <div className="reserve-wrapper">
                        <i className="bi bi-pencil-square img-2" alt="Reserve" />
                    </div>
                    <div className="place-marker-wrapper">
                        <i className=" bi bi-geo-alt img-2" alt="Place marker" />
                    </div>
                    <div className="payment-history-wrapper">
                        <i className="bi bi-hourglass-split payment-history" alt="Payment history" />
                    </div>
                    <div className="earth-planet-wrapper">
                        <i className=" bi bi-globe-americas img-2" alt="Earth planet"  />
                    </div>
                    <div className="text-wrapper-32">Island Reach</div>
                    <div className="text-wrapper-33">Real Time Update</div>
                    <div className="text-wrapper-34">Reservation Management</div>
                    <div className="text-wrapper-35">Multiple Shops Locations</div>
                    <div className="text-wrapper-36">Reservation History</div>
                </div>
            </div>
        </div>
    )
}

export default Home