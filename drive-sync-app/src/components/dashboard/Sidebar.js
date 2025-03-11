import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaFolder, FaClock, FaCog, FaBars } from "react-icons/fa";
import "../../assets/styles/Sidebar.css"; // ✅ Using separate Sidebar.css

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      
      {/* ✅ Toggle Button */}
      <div className="sidebar-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
        <FaBars size={20} />
      </div>

      {/* ✅ Sidebar Navigation */}
      <nav>
        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <FaHome /> {!isCollapsed && <span>Home</span>}
          </li>
          <li onClick={() => navigate("/documents")}>
            <FaFolder /> {!isCollapsed && <span>Document Library</span>}
          </li>
          <li onClick={() => navigate("/quick-access")}>
            <FaClock /> {!isCollapsed && <span>Quick Access</span>}
          </li>
        </ul>
      </nav>

      {/* ✅ Settings Button (Bottom) */}
      <div className="sidebar-bottom" onClick={() => navigate("/settings")}>
        <FaCog /> {!isCollapsed && <span>Settings</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
