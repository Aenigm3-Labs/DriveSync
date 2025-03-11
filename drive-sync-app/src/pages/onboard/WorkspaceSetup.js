import React, { useState } from "react";
import "../../assets/styles/Onboarding.css"; // ✅ Use the same CSS file

const WorkspaceSetup = ({ onBack, onFinish }) => {
  const [workspaceName, setWorkspaceName] = useState("Aenigm3labs's Workspace");

  return (
    <div className="onboarding-container"> {/* ✅ Same class as other steps */}
      <h2>Lastly,</h2>
      <h3>What would you like to name your Workspace?</h3>

      {/* ✅ Standardized Input Field */}
      <input
        type="text"
        className="input-field" // ✅ Changed to match common styles
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
        placeholder="Try the name of your company or organization."
      />

      {/* ✅ Progress Bar (Matches Other Steps) */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div> {/* Final step */}
      </div>

      {/* ✅ Standardized Info Text */}
      <p className="info-text">
        You are now logged in. Enjoy organizing your documents seamlessly.
      </p>

      {/* ✅ Standardized Button Group */}
      <div className="button-group">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <button className="finish-button" onClick={() => onFinish(workspaceName)}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default WorkspaceSetup;
