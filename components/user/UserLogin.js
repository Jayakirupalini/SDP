import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const UserLogin = ({ setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "user") {
      setRole("user");
      navigate("/"); // Redirect to home or user-specific page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <section className='login-container'>
      <div className='login-form'>
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        <div className='signup-link'>
          <p>
            Don't have an account? <Link to='/signup'>Click here</Link> to create one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
