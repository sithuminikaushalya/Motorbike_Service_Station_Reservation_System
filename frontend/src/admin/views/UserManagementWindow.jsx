import React, { useState, useEffect } from 'react';
import './UserManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const UserManagementWindow = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', signupDate: '2024-02-25' },
    { id: 2, username: 'user2', signupDate: '2024-02-26' },
    { id: 3, username: 'user3', signupDate: '2024-02-27' },
    { id: 4, username: 'user4', signupDate: '2024-02-28' },
    { id: 5, username: 'user5', signupDate: '2024-02-29' },
  ]);

  useEffect(() => {
    // Simulating fetching user data (replace with actual API call)
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
      // const data = await fetch('https://api.example.com/users').then((response) => response.json());
      // setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="user-management">
      <LeftSidebar />

      <div className="user-management-content">
        <h2>User Management</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="user-list">
            {users.map((user) => (
              <div key={user.id} className="user-item">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>SignUp Date:</strong> {user.signupDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
  );
};

export default UserManagementWindow;
