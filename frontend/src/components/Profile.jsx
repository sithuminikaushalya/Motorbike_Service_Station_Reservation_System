
// Profile.jsx

import React, { useState } from "react";
import './Profile.css';

function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryPhone, setRecoveryPhone] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { currentPassword, newPassword, recoveryPhone, recoveryEmail, twoFactorAuth });
  };

  return (
    <div className="profile-content">
    <div className="profile-container">
      <h2 className="profile-title">Account Settings</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="recoveryPhone">Recovery Phone Number</label>
          <input type="tel" id="recoveryPhone" value={recoveryPhone} onChange={(e) => setRecoveryPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="recoveryEmail">Recovery Email Address</label>
          <input type="email" id="recoveryEmail" value={recoveryEmail} onChange={(e) => setRecoveryEmail(e.target.value)} />
        </div>
        <div className="form-group two-factor-auth">
          <input type="checkbox" id="twoFactorAuthToggle" checked={twoFactorAuth} onChange={(e) => setTwoFactorAuth(e.target.checked)} />
          <label htmlFor="twoFactorAuthToggle">Enable Two-Factor Authentication</label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  );
}

export default Profile;
