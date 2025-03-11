import React, { useState } from "react";
import "../../assets/styles/Onboarding.css"; // Import dedicated CSS

const WorkspaceSetup = ({ onBack, onFinish }) => {
  const [workspaceName, setWorkspaceName] = useState("Aenigm3labs's Workspace");

  return (
    <div className="onboarding-container">
      <h2>Lastly,</h2>
      <h3>What would you like to name your Workspace?</h3>

      {/* Input Field for Workspace Name */}
      <input
        type="text"
        className="workspace-input"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
        placeholder="Try the name of your company or organization."
      />

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div> {/* Final step */}
      </div>

      {/* Completion Message */}
      <p className="completion-text">
        You are now logged in. Enjoy organizing your documents seamlessly.
      </p>

      {/* Back and Finish Buttons */}
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
