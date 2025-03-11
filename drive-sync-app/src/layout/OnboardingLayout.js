import React from "react";
import "../assets/styles/Onboarding.css"; // ✅ Import layout-specific styles

const OnboardingLayout = ({ children }) => {
  return (
    <div className="onboarding-layout">
      
      {/* ✅ HEADER */}
      <header className="onboardingheader">
        <h2>DriveSync Onboarding</h2>
      </header>

      {/* ✅ CONTENT (Where onboarding steps will be rendered) */}
      <div className="onboarding-content">
        {children} {/* This is where `OnboardingWrapper.js` loads the pages */}
      </div>


    </div>
  );
};

export default OnboardingLayout;
