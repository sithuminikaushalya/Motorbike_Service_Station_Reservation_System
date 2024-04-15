import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png";
import { FaUser ,FaLock,FaEnvelope} from "react-icons/fa";
import './Signup.css'



function Signup() {
    return (
        <div className="signup-container">
        <div className="signup-wrapper">
            <form action="">
                <h1>Signup</h1>
                <div className="signup-input-box">
                    <input type="text" placeholder='First Name' required/>
                    <FaUser className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="text" placeholder='Last Name' required/>
                    <FaUser className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="text" placeholder='Email' required/>
                    <FaEnvelope className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className="signup-icon"/>
                </div>
                <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="signup-button">Signup</button>
               <div className="register-link">
               <p>Already Have an Account? <a href="#">Login</a></p>

               </div>


             
            </form>
        </div>
        </div>
    );
}

export default Signup;
