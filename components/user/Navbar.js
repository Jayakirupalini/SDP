import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = ({ setRole }) => {
  const [Mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setRole(role); // Set the role in the App state
    if (role === "admin") {
      navigate("/admin-login");
    } else {
      navigate("/user-login");
    }
  };

  return (
    <nav className='navbar'>
      <h3 className='logo'>
        <img src="/textally-high-resolution-logo-transparent.png" alt="Logo" className="logo-image" />
      </h3>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/' className='home'>
          <li>Home</li>
        </Link>
        <Link to='/inventory' className='inventory'>
          <li>Inventory</li>
        </Link>
        <Link to='/sales' className='sales'>
          <li>Sales</li>
        </Link>
        <Link to='/purchases' className='purchases'>
          <li>Purchases</li>
        </Link>
        <li className='dropdown'>
          <button className='dropbtn'>Login</button>
          <div className='dropdown-content'>
            <button onClick={() => handleRoleChange("user")}>User</button>
            <button onClick={() => handleRoleChange("admin")}>Admin</button>
          </div>
        </li>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
