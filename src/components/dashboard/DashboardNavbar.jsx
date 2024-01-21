import React from "react";

function DashboardNavbar() {
  return (
    <div className="bg-dark text-light d-flex justify-content-between fs-3 px-5 py-3">
      <div>Dashboard</div>
      <div className="d-flex">
        <span className="rounded-5 bg-light text-center text-dark me-2">log</span>
        {/* <img src="" alt="" /> */}
        <div>Bhavin Nor</div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
