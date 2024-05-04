import React, { useEffect, useState } from "react";
import logo from "../components/assets/kec-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBar, setIsBar] = useState(false);

  useEffect(() => {
    // Set initial isLogin state to false if not already set in localStorage
    if (!localStorage.getItem("isLogin")) {
      localStorage.setItem("isLogin", "false");
    }

    const storedLoginState = localStorage.getItem("isLogin");
    if (storedLoginState === "true") {
      // Update UI based on login state
      $(".dashboard").css({ display: "block" });
      $(".register-login-btn button").css({ display: "none" });
      $(".register-login-btn .logout-btn").css({ display: "block" });
      const currentPath = location.pathname;
      const allowedRoutes = ["/login", "/register"];

      if (allowedRoutes.includes(currentPath)) {
        navigate("/error");
      }
    } else {
      const currentPath = location.pathname;
      const allowedRoutes = ["/login", "/register", "/"];

      if (!allowedRoutes.includes(currentPath)) {
        navigate("/error");
      }
    }
  }, [location, navigate]);

  const handleList = () => {
    setIsBar(!isBar);
    $(".list-items-container").toggle();
  };

  const handleLanguage = () => {
    $(".list-of-languages").toggle();
  };

  const handleLogout = () => {
    const confirmation = window.confirm(
      "Are you sure you want to Logout your Account?"
    );

    if (confirmation) {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("count");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <header>
      <div className="left-items">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="list-items">
        <Link to="/" style={{ color: "#000" }}>
          <li>Home</li>
        </Link>
        <Link to="/dashboard" style={{ color: "#000" }}>
          <li className="dashboard">Dashboard</li>
        </Link>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <div className="register-login-btn">
        <div className="list-of-languages" style={{ display: "block" }}>
          <ul>
            <li>English</li>
            <li>Tamil</li>
            <li>Hindi</li>
          </ul>
        </div>
   
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button style={{display: "none"}}>Register</button>
        </Link>
        <button className="logout-btn" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
      <div className="list-items-container">
        <ul className="list-items">
          <Link to="/" style={{ color: "#000" }}>
            <li>Home</li>
          </Link>
          <Link to="/dashboard" style={{ color: "#000" }}>
            <li className="dashboard">Dashboard</li>
          </Link>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
