import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png"


function Signup(){
    return(
        
        <div className="form signup">
        <div className="form-content">
            <header>Signup</header>
            <form action="#">
                <div className="field input-field">
                    <input type="email" placeholder="Email" class="input"/>
                </div>
                <div className="field input-field">
                    <input type="password" placeholder="Create password" class="password"/>
                </div>
                <div className="field input-field">
                    <input type="password" placeholder="Confirm password" class="password"/>
                    <i class='bx bx-hide eye-icon'></i>
                </div>
                <div className="field button-field">
                    <button>Signup</button>
                </div>
            </form>
            <div className="form-link">
                <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
            </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
            <a href="#" class="field facebook">
            <img src={facebook} alt="" class="google-img"/>
                <span>Login with Facebook</span>
            </a>
        </div>
        <div className="media-options">
            <a href="#" class="field google">
                <img src={google} alt="" class="google-img"/>
                <span>Login with Google</span>
            </a>
        </div>
    </div>
    );

}

export default Signup;