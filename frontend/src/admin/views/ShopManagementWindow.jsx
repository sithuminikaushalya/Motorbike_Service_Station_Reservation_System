import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ShopManagementWindow.css'; // Make sure to create this CSS file
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ShopManagementWindow = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Simulating fetching shop data (replace with actual API call)
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
      const data = await fetch('https://api.example.com/shops').then((response) => response.json());
      setShops(data);
    };

    fetchData();
  }, []);

  return (
    <div className="shop-management">
      <LeftSidebar />

      <div className="shop-management-content">
        <h2>Shop Management</h2>

        {shops.length === 0 ? (
          <p>No shops found.</p>
        ) : (
          <div className="shop-list">
            {shops.map((shop) => (
              <div key={shop.id} className="shop-item">
                <p>
                  <strong>Shop Name:</strong> {shop.shopName}
                </p>
                <p>
                  <strong>Location:</strong> {shop.location}
                </p>
                <p>
                  <strong>View Details:</strong>
                  <Link to={`/shop/${shop.id}`}>View Details</Link>
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

export default ShopManagementWindow;
