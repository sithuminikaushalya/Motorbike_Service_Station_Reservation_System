// ChatSettingWindow.js

import React, { useState } from 'react';
import './ChatSettingWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ChatSettingWindow = () => {
  // State to manage chat settings
  const [chatSettings, setChatSettings] = useState({
    notifications: true,
    sound: true,
    chatInbox: true,
    unreadMessages: true,
    deletedMessages: false,
    // Add more chat settings as needed
  });

  const handleChatSettingsUpdate = (e) => {
    e.preventDefault();
    // Implement logic to update chat settings
    console.log('Chat settings updated:', chatSettings);
  };

  return (
    <div className="chat-setting-window">
      <LeftSidebar />

      <div className="chat-setting-content">
        <h2>Chat Settings</h2>

        <form className="chat-setting-form" onSubmit={handleChatSettingsUpdate}>
          <label>
            <input
              type="checkbox"
              checked={chatSettings.notifications}
              onChange={(e) =>
                setChatSettings({ ...chatSettings, notifications: e.target.checked })
              }
            />
            Receive Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.sound}
              onChange={(e) => setChatSettings({ ...chatSettings, sound: e.target.checked })}
            />
            Enable Sound
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.chatInbox}
              onChange={(e) => setChatSettings({ ...chatSettings, chatInbox: e.target.checked })}
            />
            Show Chat Inbox
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.unreadMessages}
              onChange={(e) =>
                setChatSettings({ ...chatSettings, unreadMessages: e.target.checked })
              }
            />
            Show Unread Messages
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.deletedMessages}
              onChange={(e) =>
                setChatSettings({ ...chatSettings, deletedMessages: e.target.checked })
              }
            />
            Show Deleted Messages
          </label>

          {/* Add more fields for additional chat settings */}
          
          <button type="submit" className='chat-btn'>Save Settings</button>
        </form>
      </div>

      <RightSidebar />
    </div>
  );
};

export default ChatSettingWindow;
