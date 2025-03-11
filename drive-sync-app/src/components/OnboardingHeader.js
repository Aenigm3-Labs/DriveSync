import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Onboarding.css"; // ✅ Import styles

const OnboardingHeader = () => {
  return (
    <header className="onboarding-header">
      <div className="logo">
        <Link to="/">DriveSync</Link> {/* ✅ Only Logo & Company Name */}
      </div>
    </header>
  );
};

export default OnboardingHeader;
