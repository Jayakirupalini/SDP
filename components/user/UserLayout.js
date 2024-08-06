// UserLayout.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Inventory from "./Inventory";
import Sales from "./Sales";
import Purchases from "./Purchases";
import Signup from "./Signup";
import UserLogin from "./UserLogin";

const UserLayout = ({ setRole }) => {
  return (
    <div className="user-layout">
      <Navbar setRole={setRole} />
      <div className="user-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-login" element={<UserLogin setRole={setRole} />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserLayout;
