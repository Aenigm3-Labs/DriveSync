import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "./layout/AuthLayout";

// Pages
import LandingPage from "./pages/auth/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Onboarding Wrapper (Handles all steps inside)
import OnboardingWrapper from "./components/OnboardingWrapper";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Onboarding Steps (Wrapper Handles All Pages) */}
        <Route path="/onboarding" element={<OnboardingWrapper />} />
        <Route path="/business-size" element={<OnboardingWrapper />} />
        <Route path="/manage-selection" element={<OnboardingWrapper />} />
        <Route path="/tool-selection" element={<OnboardingWrapper />} />
        <Route path="/workspace-setup" element={<OnboardingWrapper />} />

      </Routes>
    </Router>
  );
};

export default App;
