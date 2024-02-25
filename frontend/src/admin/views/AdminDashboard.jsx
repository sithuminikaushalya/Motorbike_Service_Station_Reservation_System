import React, { useState } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="admin-dashboard">
      <LeftSidebar />
      
      <div className="admin-content">
        <h1>Admin Dashboard</h1>

        {/* Add your admin dashboard content here */}
        <div className="dashboard-options">
          <div className={`dashboard-option ${selectedOption === 'option1' && 'selected'}`} onClick={() => handleOptionClick('option1')}>
            Option 1
          </div>
          <div className={`dashboard-option ${selectedOption === 'option2' && 'selected'}`} onClick={() => handleOptionClick('option2')}>
            Option 2
          </div>
          {/* Add more options as needed */}
        </div>

        <div className="dashboard-content">
          {/* Content that changes based on the selected option */}
          {selectedOption === 'option1' && <p>This is content for Option 1.</p>}
          {selectedOption === 'option2' && <p>This is content for Option 2.</p>}
          {/* Add content for more options */}
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default AdminDashboard;