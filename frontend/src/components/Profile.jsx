import React from "react";
import './Profile.css';
import userIcon from "../assets/maleuser.png";
import Rightbar from "./RightBar";

function Profile(){

    return(
        
      <div className="profile-container">
      <Rightbar/>
      <img className="icon-user" src={userIcon} alt="User" />
           <div className="personal-info">
            <div className="input-group-reserve">
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" placeholder="Enter First Name" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="phhoneno">Phone Number</label>
                <input type="text" id="phoneno" placeholder="Enter Phone Number" />

            </div>
            </div>
            <div className="personal-info">
            <div className="input-group-reserve">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Enter Email Address" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Enter Location" />

            </div>
            </div>
            <p className="resrvation-form-text">Bike Details</p>
            <div className="bike-details">
            <div className="input-group-reserve">
                <label htmlFor="bikebrand">Bike Brand</label>
                <input type="text" id="bikebrand" placeholder="Enter Bike Brand" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="bikemodel">Bike Model</label>
                <input type="text" id="bikemodel" placeholder="Enter Bike Model" />

            </div>
            </div>
            <div className="bike-details">
            <div className="input-group-reserve">
                <label htmlFor="bikeyear">Bike Year</label>
                <input type="text" id="bikeyear" placeholder="Enter Bike Year" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="serialno">Serial Number</label>
                <input type="text" id="serialno" placeholder="Enter Serial Number" />

            </div>
            </div>
            <button type="submit" className="submit-button-reserve">Save</button>
      </div>
    );
    
}
export default Profile;