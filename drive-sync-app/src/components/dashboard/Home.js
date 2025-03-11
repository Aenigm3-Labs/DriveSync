import React from "react";
import "../../assets/styles/Home.css"; // ✅ Ensure styles are imported

const Home = () => {
  // Sample data (these can be dynamic)
  const stats = [
    { label: "Untitled Docs/Folders", value: 6 },
    { label: "Unlinked Items", value: 4 },
    { label: "Repetitive Items", value: 3 },
    { label: "Recent Access", value: 8 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Personalized Dashboard</h2>
      
      {/* ✅ Stats Cards */}
      <div className="dashboard-cards">
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-card">
            <span className="stat-value">{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ✅ Welcome Message */}
      <p className="dashboard-message">
        Welcome to your personalized dashboard! Use the sidebar to navigate.
      </p>
    </div>
  );
};

export default Home;
