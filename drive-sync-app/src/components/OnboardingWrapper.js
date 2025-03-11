import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Onboarding from "../pages/onboard/Onboarding"; 
import BusinessSizeSelection from "../pages/onboard/BusinessSizeSelection";
import ManageSelection from "../pages/onboard/ManageSelection";
import ToolSelection from "../pages/onboard/ToolSelection";
import WorkspaceSetup from "../pages/onboard/WorkspaceSetup"; 

const OnboardingWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define onboarding steps with both "Next" and "Back" navigation
  const steps = {
    "/onboarding": { component: Onboarding, nextRoute: "/business-size", prevRoute: null },
    "/business-size": { component: BusinessSizeSelection, nextRoute: "/manage-selection", prevRoute: "/onboarding" },
    "/manage-selection": { component: ManageSelection, nextRoute: "/tool-selection", prevRoute: "/business-size" },
    "/tool-selection": { component: ToolSelection, nextRoute: "/workspace-setup", prevRoute: "/manage-selection" },
    "/workspace-setup": { component: WorkspaceSetup, nextRoute: null, prevRoute: "/tool-selection" },
  };

  // Get the current step
  const currentStep = steps[location.pathname];

  if (!currentStep) {
    return <h2>Step not found</h2>;
  }

  const { component: Component, nextRoute, prevRoute } = currentStep;

  const handleNext = (selectedOption) => {
    console.log("User selected:", selectedOption);
    navigate(nextRoute);
  };

  const handleBack = () => {
    if (prevRoute) {
      navigate(prevRoute);
    }
  };

  return <Component onNext={handleNext} onBack={handleBack} />;
};

export default OnboardingWrapper;
