import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/views/AdminDashboard';
import LeftSidebar from "./admin/common/LeftSidebar";
import FaultManagementWindow from "./admin/views/FaultManagementWindow";
import UserManagementWindow from "./admin/views/UserManagementWindow";
import ShopManagementWindow from "./admin/views/ShopManagementWindow";
import SubscriptionPlansManagementWindow from "./admin/views/SubscriptionPlansManagamentWindow";
import AdminHomePage from "./admin/views/AdminHomePage";


const App = () =>{
  return(
   <Router>
      <Routes>
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard  />} />
        <Route path="/" element={<LeftSidebar />} />
        <Route path="/fault-management" element={<FaultManagementWindow />} />
        <Route path="/user-management" element={<UserManagementWindow />} />
        <Route path="/shop-management" element={<ShopManagementWindow />} />
        <Route path="/subscription-plans" element={<SubscriptionPlansManagementWindow />} />
      </Routes>
    </Router>

  );
}

export default App;