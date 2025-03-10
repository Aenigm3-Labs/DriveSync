import React from "react";
import "../../assets/styles/Auth.css";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
    </div>
    
  );
};

export default ForgotPassword;
