// src/components/admin/AdminLayout.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Admindashboard from "./Admindashboard";
import AdminInventory from "./AdminInventory";
import Adminsales from "./Adminsales";
import AdminPurchases from "./AdminPurchases";
import Adminsettings from "./Adminsettings";
import Adminsidebar from "./Adminsidebar";

const AdminLayout = ({ setRole }) => {
  return (
    <div className="admin-layout">
      <Adminsidebar setRole={setRole} />
      <div className="admin-content">
        <Routes>
          <Route path="/admin-dashboard" element={<Admindashboard />} />
          <Route path="/admin-inventory" element={<AdminInventory />} />
          <Route path="/admin-sales" element={<Adminsales />} />
          <Route path="/admin-purchases" element={<AdminPurchases />} />
          <Route path="/admin-settings" element={<Adminsettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
