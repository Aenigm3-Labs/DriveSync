import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Home from "../components/dashboard/Home";
import Documents from "../components/dashboard/Documents";
import QuickAccess from "../components/dashboard/QuickAccess";
import Settings from "../components/dashboard/Settings";
import "../assets/styles/Dashboard.css"; 

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <Routes>
            <Route path="/dashboard" element={<Home />} /> {/* ✅ Ensure this is mapped correctly */}
            <Route path="/documents" element={<Documents />} />
            <Route path="/quick-access" element={<QuickAccess />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
