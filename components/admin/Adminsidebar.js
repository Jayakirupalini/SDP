// src/components/admin/AdminSidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const AdminSidebar = ({ setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate("/admin-login");
  };

  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/admin-inventory">Inventory</Link></li>
        <li><Link to="/admin-sales">Sales</Link></li>
        <li><Link to="/admin-purchases">Purchases</Link></li>
        <li><Link to="/admin-settings">Settings</Link></li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
