import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "./layout/AuthLayout";

// Components
import AuthHeader from "./components/AuthHeader";
import AuthFooter from "./components/AuthFooter";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Styles
import "./assets/styles/Auth.css";
import "./assets/styles/Landing.css";

const App = () => {
  return (
    <Router>
      <AuthHeader /> {/* Ensuring header is always at the top */}
      <div className="page-container"> {/* Ensures content is below header */}
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Auth Pages Wrapped in AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </div>
      <AuthFooter />
    </Router>
  );
};

export default App;