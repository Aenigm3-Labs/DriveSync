import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import "../assets/styles/Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <AuthHeader />
      
      <main className="landing-content">
        <h1>Organize and Manage Your Documents, Effortlessly</h1>
        <p><strong>Seamless document storage and access in one platform.</strong></p>
        <p>Save time, collaborate faster, and structure your files without clutter.</p>
        <p><strong>Neurodivergent-Friendly: Designed for clear structure, high contrast, and accessibility.</strong></p>
        <Link to="/register" className="cta-button">Get Started. It’s FREE →</Link>
        <p className="free-note">Free Forever. No Credit Card Required.</p>
      </main>
      
      <AuthFooter />
    </div>
  );
};

export default LandingPage;
