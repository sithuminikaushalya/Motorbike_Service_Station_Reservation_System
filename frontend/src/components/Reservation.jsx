import React from "react";
import './Reservation.css';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function Reservation(){
    return( 
    <div className="reservation-form-container">
    <div className="reservation-form-body">
    <div className="radio-btn-container">
        <input type="radio" className="btn" name="check"  checked="checked" />
        <span>Motor bike</span>
        <input type="radio" className="btn" name="check"  checked="checked" />
        <span>Scooter</span>
        <input type="radio" className="btn" name="check"  checked="checked" />
        <span>Electric Bike</span>
    </div>
    <div className="booking-form">
        <label>User Name</label>
        <input type="text" className="form-control" placeholder="Enter UserName"/>
        <label>Motorbike Number</label>
        <input type="text" className="form-control" placeholder="Enter MotorBikeNo"/>
        <div className="input-grp-reservation">
            <label>Reservation Date</label>
            <input type="date" className="form-control select-date"/>
        </div>
        <div className="input-grp-reservation">
            <label>Time</label>
            <input type="number" className="form-control" value="1"/>
        </div>
        <div className="input-grp-reservation">
            <label>Adults</label>
            <input type="number" className="form-control" value="0"/>
        </div>
        <div className="input-grp-reservation">
            <label>Advance Payment</label>
            <select className="custom-select">
            <option value="1">Cash</option>
            <option value="2">Online</option>
           

            </select>
           
        </div>
        <div className="input-grp-reservation">
            <button type="button" className="btn-btn-primary reservation">Reserve</button> 
        </div>

    </div>

    </div>

    </div>
);
}

export default Reservation;

