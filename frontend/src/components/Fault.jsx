import React, { useState, useEffect } from 'react';

import './Fault.css';

const Fault = () => {
  
  // State for storing dropdown options
  const [dropdownOptions, setDropdownOptions] = useState([]);
  // State for storing selected dropdown value
  const [selectedOption, setSelectedOption] = useState('');
  
  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to save data to the database
const saveData = async () => {
  try {
    

    const response = await fetch('http://localhost:8095/admin/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminName: selectedOption, // Assuming adminName should be selectedOption
        // adminEmail: selectedDate.toISOString(), // Assuming adminEmail should be selectedDate
        // adminPassword: selectedOption, // Assuming adminPassword should be selectedOption
        adminRole: selectedOption, // Assuming adminRole should be selectedOption
      }),
    });
    const data = await response.json();
    console.log('Data saved successfully:', data);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};




  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8095/admin/getAdmin');
        const data = await response.json();
        const dropdownOptions = data.map((admin) => admin.adminName);
        setDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchDropdownOptions();
  }, []);

  return (
    <div className="datetime-picker-container">
      <h2 className="datetime-picker-header">Select Date and Time</h2>
      
      {/* Dropdown */}
      <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Save button */}
      <button onClick={saveData}>Save Data</button>
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>

       {/* Dropdown */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Save button */}
      <button onClick={saveData}>Save Data</button>
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>

       {/* Dropdown */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Save button */}
      <button onClick={saveData}>Save Data</button>
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>

       {/* Dropdown */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Save button */}
      <button onClick={saveData}>Save Data</button>
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>
    </div>
  );
};

export default Fault;
