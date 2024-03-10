import React from "react";
import './Login.css';
import sideImage from "../assets/sideimage.png"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-container">
            <div className="form-container">
                <p className="login-text">LOG IN</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" placeholder="Enter UserName" />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="forget-remember">
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>

                    </div>
                    <div className="forget-password">
    <Link to="/forgetpw">Forget Password</Link>
</div>

                    </div>
                    <button type="submit" className="login-button-form">Log in</button>
                </form>
                <div className="seperator">
                    <span>Or</span>
                </div>
                <div className="signup-link">
                Don't have an account? <Link to="/register">Click here</Link>
                </div>

            </div>
            <div className="image-container">
                <img src={sideImage} alt="Login" />
            </div>
        </div>

    );

}

export default Login;