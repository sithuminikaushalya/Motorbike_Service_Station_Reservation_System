import React, { useState } from 'react';
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png";
import './Login.css';
import { FaUser ,FaLock,FaEnvelope} from "react-icons/fa";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();

    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    

    async function loginCustomer(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8095/customer/login", {
            customerEmail,
            customerPassword,
          });
          
            if (response.data.status === true) {
            
            navigate('/Shops');
         
             }
             else if(response.data.status === false){
               alert(response.data.message);
            }
           
        } catch (error) {
           alert(error);
            
        }
      }
    
    const handleSignupButtonClick = () => {
        navigate("/signup");
    };

    const handleForgotPwClick =() =>{
        navigate("/forgotpw")
    }

    return(
        <div className="signup-container">
        <div className="signup-wrapper">
        <form onSubmit={loginCustomer}>
                <h1>Login</h1>
                <div className="signup-input-box">
                    <input type="email" placeholder='Email' required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                    <FaUser className="signup-icon"/>
                </div>
             
                <div className="signup-input-box">
                    <input type="password" placeholder='Password' required
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    <FaLock className="signup-icon"/>
                </div>
                <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#" onClick={handleForgotPwClick}>Forgot Password?</a>
                </div>
                <button type="submit" className="signup-button">Login</button>
                </form>
                
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
            


             
            
        </div>
        </div>
    
    );


}

export default Login;