import React, { useEffect, useState } from "react";
import logo from "../components/assets/kec-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
/* import { HiBars3 } from "react-icons/hi2"; */
import $ from "jquery";
/* import { MdClose } from "react-icons/md";
import { IoLanguage } from "react-icons/io5"; */

const Header = () => {
  /* localStorage.removeItem('isLogin'); */
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLogin");
    if (storedLoginState === "true") {
      $(".dashboard").css({ display: "block" });
      $(".register-login-btn button").css({ display: "none" });
      $(".register-login-btn .logout-btn").css({ display: "block" });
      const currentPath = location.pathname;
      const allowedRoutes = ["/login", "/register"];

      if (allowedRoutes.includes(currentPath)) {
        window.location.href = "/error";
      }
    } else {
      const currentPath = location.pathname;
      const allowedRoutes = ["/login", "/register", "/"];

      if (!allowedRoutes.includes(currentPath)) {
        window.location.href = "/error";
      }
    }
  }, [location]);
  const [isBar, setIsBar] = useState(false);
  const handleList = () => {
    if (isBar === true) {
      setIsBar(false);
      $(".list-items-container").css({ display: "none" });
    } else {
      setIsBar(true);
      $(".list-items-container").css({ display: "block" });
    }
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
        {/* {isBar ? (
          <MdClose className="bar-icon" onClick={() => handleList()} />
        ) : (
          <HiBars3 className="bar-icon" onClick={() => handleList()} />
        )} */}
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
