import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Auth.css";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      {/* Logo on the left */}
      <div className="logo">
        <Link to="/">DriveSync</Link>
      </div>

      {/* Toggle Buttons for Login/Signup */}
      <div className="auth-toggle">
        <Link to="/login" className="toggle-button">Login</Link>
        <span> / </span>
        <Link to="/register" className="toggle-button">Signup</Link>
      </div>
    </header>
  );
};

export default AuthHeader;
