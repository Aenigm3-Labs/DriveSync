import React, { useState } from "react";
import "../../assets/styles/Onboarding.css";

const ManageSelection = ({ onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "HR & Recruiting",
    "Professional Services",
    "Finance & Accounting",
    "Software Development",
    "Creative & Design",
    "Personal Use",
    "PMO",
    "Startup",
    "Operations",
    "IT",
    "Marketing",
    "Sales & CRM",
    "Support",
    "Other"
  ];

  return (
    <div className="onboarding-container">
      <h2>What would you like to manage?</h2>

      {/* Selection Grid */}
      <div className="options-grid">
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

      
      <p className="info-text">Don’t worry, you can always add more in the future.</p>

        {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div> {/* Adjust progress as needed */}
      </div>


      {/* Back and Next Buttons */}
      <div className="button-group">
        <button 
          className="back-button" 
          onClick={onBack}
        >
          ← Back
        </button>

        <button 
          className="next-button" 
          onClick={() => onNext(selectedOption)}
          disabled={!selectedOption}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ManageSelection;
