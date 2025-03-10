import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Auth.css"; // Ensure this file exists

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Own your day. Simplified focus and productivity</h1>

        {/* Apple Sign-In */}
        <button className="register-button apple">
          <span>Continue with Apple</span> 🍏
        </button>

        {/* Google Sign-In */}
        <button className="register-button google">
          <span>Continue with Google</span> 🌍
        </button>

        {/* Email Sign-Up */}
        <button className="register-button email">
          <span>Sign up with email</span>
        </button>

        {/* Already have an account */}
        <p className="login-link">
          <Link to="/login">Already have an account? Log in</Link>
        </p>

        {/* Award/Design Footer */}
        <div className="register-footer">
          <p>🍎 Apple Design Award <br /><span>2024 Finalist</span></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
