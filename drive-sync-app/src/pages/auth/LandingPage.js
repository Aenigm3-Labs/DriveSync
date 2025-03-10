import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import AuthFooter from "../../components/AuthFooter";
import "../../assets/styles/Auth.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <AuthHeader />

      {/* Hero Section */}
      <main className="landing-content">
      <h1>Your Cloud Documents, Reimagined.</h1>
        <p><strong>All your cloud documents in one place – visualize your folders as live hierarchies without downloads.</strong></p>
        <Link to="/register" className="cta-button">Get Started. It’s FREE →</Link>
        <p className="free-note">Free Forever. No Credit Card Required.</p>
      </main>

      <AuthFooter />
    </div>
  );
};

export default LandingPage;
