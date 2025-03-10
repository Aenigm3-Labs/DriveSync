import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "./layout/AuthLayout";

// Pages
import LandingPage from "./pages/auth/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Styles
import "./assets/styles/Auth.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page (Standalone, No AuthLayout) */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication Pages Wrapped in AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
