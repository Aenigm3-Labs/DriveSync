import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <AuthHeader /> {/* Common Header for Auth Pages */}
      <div className="auth-content">
        <Outlet /> {/* This will load Login, Register, ForgotPassword dynamically */}
      </div>
      <AuthFooter /> {/* Common Footer for Auth Pages */}
    </div>
  );
};

export default AuthLayout;
