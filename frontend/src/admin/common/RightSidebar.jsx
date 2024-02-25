import React from 'react';
import './RightSidebar.css';
import notificationIcon from '../../assets/notifications.svg';
import chatIcon from '../../assets/chat.svg';
import userIcon from '../../assets/User.svg';
import settingIcon from '../../assets/Settings.svg';
import logoutIcon from '../../assets/logout.svg';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      
      <img className="icon" src={notificationIcon} alt="Notification" />
      <img className="icon" src={chatIcon} alt="Chat" />
      <img className="icon" src={userIcon} alt="User" />
      <img className="icon" src={settingIcon} alt="Setting" />
      <img className="icon" src={logoutIcon} alt="Logout" />
    </div>
  );
};

export default RightSidebar;
