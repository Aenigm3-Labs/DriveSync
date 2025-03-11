import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard"> {/* ✅ Pass dynamic title */}
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
