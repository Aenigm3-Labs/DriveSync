import React, { useState } from "react";

const ToolSelection = ({ onNext, onBack }) => {
  const [selectedTools, setSelectedTools] = useState([]);

  const tools = [
    "Asana", "Salesforce", "Notion", "GitHub", "G Drive", "Jira",
    "Trello", "Zoom", "Excel & CSV", "Confluence", "MS Teams",
    "Monday", "Dropbox", "Wrike", "Slack", "Todoist", "Basecamp", "Figma"
  ];

  const toggleSelection = (tool) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  return (
    <div className="onboarding-container">
      <h2>Do you use any of these tools?</h2>

      <div className="tools-grid">
        {tools.map((name) => (
          <button
            key={name}
            className={`tool-button ${selectedTools.includes(name) ? "selected" : ""}`}
            onClick={() => toggleSelection(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="info-text">Bring all of your work into one place.</p>
      
        {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div> {/* Final step */}
      </div> 

      <div className="button-group">
        <button className="back-button" onClick={onBack}>← Back</button>
        <button 
          className="next-button" 
          onClick={() => onNext(selectedTools)}
          disabled={selectedTools.length === 0}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ToolSelection;
