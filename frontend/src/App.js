import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/views/AdminDashboard';
import LeftSidebar from "./admin/common/LeftSidebar";
import FaultManagementWindow from "./admin/views/FaultManagementWindow";
import UserManagementWindow from "./admin/views/UserManagementWindow";
import ShopManagementWindow from "./admin/views/ShopManagementWindow";


const App = () =>{
  return(
   <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard  />} />
        <Route path="/" element={<LeftSidebar />} />
        <Route path="/fault-management" element={<FaultManagementWindow />} />
        <Route path="/user-management" element={<UserManagementWindow />} />
        <Route path="/shop-management" element={<ShopManagementWindow />} />
        
      </Routes>
    </Router>

  );
}

export default App;