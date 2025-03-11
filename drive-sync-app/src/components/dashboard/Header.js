import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa"; // ✅ Import search & bell icons
import "../../assets/styles/Dashboard.css"; // ✅ Import shared styles

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="dashboard-header">
      
      {/* ✅ Left Side: DriveSync Name */}
      <div className="header-left">
        <h1>DriveSync</h1>
      </div>

      {/* ✅ Middle: Universal Search Bar */}
      <div className="header-center">
        <div className="search-bar">
          <FaSearch className="search-icon" /> {/* ✅ Search Icon */}
          <input 
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ✅ Right Side: Notifications */}
      <div className="header-right">
        <div className="notification-icon" onClick={() => setShowNotifications(!showNotifications)}>
          <FaBell size={24} /> {/* ✅ Bell Icon */}
        </div>

        {/* ✅ Notification Dropdown */}
        {showNotifications && (
          <div className="notification-dropdown">
            <p>No new notifications</p> {/* Dynamic notifications will go here */}
          </div>
        )}
      </div>

    </header>
  );
};

export default Header;
