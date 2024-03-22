import React, { useState } from 'react';
import './AdminProfileWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const AdminProfileWindow = () => {
    const [profileData, setProfileData] = useState({
        username: 'admin',
        email: 'admin@example.com',
        profileImage: null, // Store the uploaded image
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // Implement logic to update the user profile
        console.log('Profile updated:', profileData);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData({
                    ...profileData,
                    profileImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="admin-profile-window">
            <LeftSidebar />

            <div className="admin-profile-content">
                <h2 className="admin-profile-title">Admin Profile</h2>

                <form className="profile-form" onSubmit={handleProfileUpdate}>
                    <label className="profile-label">Profile Image:</label>
                    {profileData.profileImage && (
                        <img src={profileData.profileImage} alt="Admin" className="admin-image" />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} className="image-input" />
                    <label className="profile-label">Username:</label>
                    <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                        className="username-input"
                    />

                    <label className="profile-label">Email:</label>
                    <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="email-input"
                    />

                    <button type="submit" className="update-profile">Update Profile</button>
                </form>
            </div>

            <RightSidebar />
        </div>
    );
};

export default AdminProfileWindow;
