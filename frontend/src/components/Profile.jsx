import React, { useState } from "react";
import './Profile.css';
import userIcon from "../assets/maleuser.png";
import Rightbar from "./RightBar";

function Profile() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Reservation submitted:', { name, email, phone, bikeModel, serviceType, date, time });
  };
  return (

    <div className="resrvation-content">

      <div className="reservation-container">
        <h2 className="reservation-title">Online Reservation</h2>
        <form onSubmit={handleSubmit} className="reservation-form">
    
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="text" placeholder="Bike Model" value={bikeModel} onChange={(e) => setBikeModel(e.target.value)} />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="text"  placeholder="Serial Number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
          <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">Select Service Type</option>
            <option value="Repair">Repair</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <button type="submit">Submit Reservation</button>
        </form>
      </div>

    </div>

  );

}
export default Profile;