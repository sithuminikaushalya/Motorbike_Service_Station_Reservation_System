import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/views/AdminDashboard';
import LeftSidebar from "./admin/common/LeftSidebar";
import FaultManagementWindow from "./admin/views/FaultManagementWindow";


const App = () =>{
  return(
   <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard  />} />
        <Route path="/" element={<LeftSidebar />} />
        <Route path="/fault-management" element={<FaultManagementWindow />} />

      </Routes>
    </Router>

  );
}

export default App;