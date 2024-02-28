import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminHomePage.css';

const AdminHomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', loginData);

    // Assuming successful login, navigate to the admin dashboard
    navigate('/admin/dashboard');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup submitted:', signupData);
  };

  return (
    <div className="admin-home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="admin-title">Admin Portal</h1>
        
        <div className="forms-container">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2>Login</h2>
            <label>Email:</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <label>Password:</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button type="submit">Login</button>
          </form>

          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <h2>Sign Up</h2>
            <label>Email:</label>
            <input
              type="email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <label>Password:</label>
            <input
              type="password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
