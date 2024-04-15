import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png";
import './Login.css';

import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();

    const handleSignupButtonClick = () => {
        navigate("/signup");
    };

    return(
        
        <div className="container forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Password" class="password"/>
                          
                        </div>
                        <div className="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>Don't have an account? <a href="#" class="link signup-link" onClick={handleSignupButtonClick}>Signup</a> </span>
                    </div>
                </div>
                <div className="line"></div>
                <div className="media-options">
                    <a href="#" className="field google">
                    <img src={facebook} alt="" class="google-img"/>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src={google} alt="" class="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>


        </div>

  
    
    );


}

export default Login;