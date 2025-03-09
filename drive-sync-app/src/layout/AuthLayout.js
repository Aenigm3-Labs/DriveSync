import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import "../assets/styles/Auth.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <AuthHeader />
      <div className="auth-content">
        <Outlet /> {/* This will render Login, Register, or Forgot Password */}
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
