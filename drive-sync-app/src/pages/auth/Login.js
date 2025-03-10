import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">Login</button>
      </form>

      {/* Forgot Password Link */}
      <p className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
