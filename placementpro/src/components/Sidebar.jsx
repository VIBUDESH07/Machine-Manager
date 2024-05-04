import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ username }) => {
  return (
    <div className="sidebar-container">
      <ul>
        {/* Pass username as URL parameter */}
        <Link to={`/dashboard/${username}`}>
          <li style={{ borderBottom: "3px solid #3571e1" }}>🏠 Home</li>
        </Link>
        <Link to="/addvehicle">
          <li> 🏢 Companies</li>
        </Link>
        <Link to="/upcoming-services">
          <li> 📊 Reports</li>
        </Link>
        <li> ℹ️ About us</li>
        <li> ⚙️ Settings</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default SideBar;
