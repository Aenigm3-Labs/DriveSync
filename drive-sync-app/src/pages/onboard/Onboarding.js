import React, { useState } from "react";
import "../../assets/styles/Onboarding.css";

const Onboarding = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Options for selection
  const options = ["Work", "Personal", "School"];

  return (
    <div className="onboarding-container">
      <h2>What would you like to use</h2>
      <h3>DriveSync for?</h3>

      {/* Purpose Selection Buttons */}
      <div className="options">
        {options.map((option) => (
          <button
            key={option}
            className={`option-button ${selectedOption === option ? "selected" : ""}`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      {/* Next Button */}
      <button 
        className="next-button" 
        onClick={() => onNext(selectedOption)}
        disabled={!selectedOption} // Disable until an option is selected
      >
        Next →
      </button>
    </div>
  );
};

export default Onboarding;
