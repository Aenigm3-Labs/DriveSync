import React from "react";
import "../assets/styles/Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
