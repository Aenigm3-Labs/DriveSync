import React, { useState } from "react";
import "../../assets/styles/Onboarding.css"; // ✅ Same CSS for all pages

const BusinessSizeSelection = ({ onNext, onBack }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const businessSizes = [
    "Solo entrepreneur",
    "Small business (2-10 employees)",
    "Medium business (11-50 employees)",
    "Large business (50+ employees)",
  ];

  return (
    <div className="onboarding-container"> {/* ✅ Standardized class name */}
      <h2>Select your</h2>
      <h3>Business Size</h3>

      {/* Options */}
      <div className="options">
        {businessSizes.map((size) => (
          <button
            key={size}
            className={`option-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div> {/* ✅ Same progress style */}
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <button className="next-button" onClick={() => onNext(selectedSize)} disabled={!selectedSize}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default BusinessSizeSelection;
