import React from "react";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";

function Dashboard() {
  return (
    <div>
      <DashboardNavbar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-2 bg-primary"
            style={{
              minHeight: "82.5vh",
            }}
          >
            <Sidebar />
          </div>
          <div className="col-md-10">Content</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
