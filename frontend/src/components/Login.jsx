import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png";
import './Login.css';
import { FaUser ,FaLock,FaEnvelope} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();

    const handleSignupButtonClick = () => {
        navigate("/signup");
    };

    return(
        <div className="signup-container">
        <div className="signup-wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="signup-input-box">
                    <input type="text" placeholder='Name' required/>
                    <FaUser className="signup-icon"/>
                </div>
             
                <div className="signup-input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className="signup-icon"/>
                </div>
                <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="signup-button">Login</button>
               <div className="register-link">
               <p>Don't Have an Account? <a href="#" onClick={handleSignupButtonClick}>Signup</a></p>

               </div>
               <div className="line"></div>
                <div className="media-options">
                    <a href="#" className="field google">
                    <img src={facebook} alt="Facebook Image" className="google-img"/>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src={google} alt="Google Image" className="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>
            


             
            </form>
        </div>
        </div>
    
    );


}

export default Login;