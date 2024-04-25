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
        <span>Roundtrip</span>
        <input type="radio" className="btn" name="check"  checked="checked" />
        <span>One way</span>
        <input type="radio" className="btn" name="check"  checked="checked" />
        <span>Multi-City</span>
    </div>
    <div className="booking-form">
        <label>Flying Form</label>
        <input type="text" className="form-control" placeholder="City or Airport"/>
        <label>Flying Form</label>
        <input type="text" className="form-control" placeholder="City or Airport"/>
        <div className="input-grp-reservation">
            <label>Returning</label>
            <input type="date" className="form-control select-date"/>
        </div>
        <div className="input-grp-reservation">
            <label>Adults</label>
            <input type="number" className="form-control" value="1"/>
        </div>
        <div className="input-grp-reservation">
            <label>Adults</label>
            <input type="number" className="form-control" value="0"/>
        </div>
        <div className="input-grp-reservation">
            <label>Travel Class</label>
            <select className="custom-select">
            <option value="1">Economy Class</option>
            <option value="2">Economy Class</option>
           

            </select>
           
        </div>
        <div className="input-grp-reservation">
            <button type="button" className="btn-btn-primary reservation">Show Flight</button> 
        </div>

    </div>

    </div>

    </div>
);
}

export default Reservation;

