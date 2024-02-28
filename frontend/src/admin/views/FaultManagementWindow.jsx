import React, { useState } from 'react';
import './FaultManagementWindow.css'; // Add your CSS file for FaultManagementWindow
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const FaultManagementWindow = () => {
  const [faults, setFaults] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Fault ${index + 1}`,
      option1: '',
      option2: '',
      option3: '',
    }))
  );

  const handleInputChange = (id, field, value) => {
    setFaults((prevFaults) =>
      prevFaults.map((fault) => (fault.id === id ? { ...fault, [field]: value } : fault))
    );
  };

  const handleSave = () => {
    console.log('Faults saved:', faults);
  };

  return (
    <div className="fault-management">
      <LeftSidebar />

      <div className="fault-management-content">
        <h2>Fault Category Management</h2>
        {faults.map((fault) => (
          <div key={fault.id} className="fault-item">
            <form className="fault-form">
              <label>{`Fault ${fault.id}:`}</label>
              <input
                type="text"
                value={fault.name}
                onChange={(e) => handleInputChange(fault.id, 'name', e.target.value)}
              />
              <br />
              <label>Option 1:</label>
              <input
                type="text"
                value={fault.option1}
                onChange={(e) => handleInputChange(fault.id, 'option1', e.target.value)}
              />
              <br />
              <label>Option 2:</label>
              <input
                type="text"
                value={fault.option2}
                onChange={(e) => handleInputChange(fault.id, 'option2', e.target.value)}
              />
              <br />
              <label>Option 3:</label>
              <input
                type="text"
                value={fault.option3}
                onChange={(e) => handleInputChange(fault.id, 'option3', e.target.value)}
              />
            </form>
          </div>
        ))}
        <div className="fault-management-buttons">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="edit-button">Edit</button>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default FaultManagementWindow;
