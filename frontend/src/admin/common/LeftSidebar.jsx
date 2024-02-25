import React from 'react';
import './LeftSidebar.css';
import bikePulseLogo from '../../assets/logo.png';
import ShopManagementIcon from '../../assets/Shop.svg';
import UserManagementIcon from '../../assets/UserManagement.svg';
import SubscriptionIcon from '../../assets/Subscription.svg';
import FaultIcon from '../../assets/Category.svg';
import Account_Setting_Icon from '../../assets/account_setting.svg';
import DropdownIcon from '../../assets/dropdown.svg'; 

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">

      <div className="logo-container">
        <img src={bikePulseLogo} alt="BikePulse Logo" className="logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="divider"></div>
      <div className="white-box">

        <div className="list-item">
          <img src={ShopManagementIcon } alt="Shop" />
          <span>Shop Management</span>
        </div>

        <div className="list-item">
          <img src={UserManagementIcon} alt="UserManagement" />
          <span>User Management</span>
        </div>

        <div className="list-item">
          <img src={SubscriptionIcon} alt="Subscription" />
          <span>Subscription Plans Management</span>
        </div>

        <div className="list-item">
          <img src={FaultIcon} alt="FaultCategory" />
          <span>Fault Category Management</span>
        </div>

        <div className="list-item dropdown">
          <img src={Account_Setting_Icon} alt="Acount & Setting" />
          <span>Account & Setting</span>
          <img src={DropdownIcon} alt="Dropdown" className="dropdown-icon" />
          <div className="dropdown-content">
            <span>Profile</span>
            <span>User Managemnt</span>
            <span>Account Setting</span>
            <span>Chat Setting</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeftSidebar;