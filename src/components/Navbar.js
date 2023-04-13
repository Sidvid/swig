import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarData from "../utils/constant/navbarData";
import { ReactComponent as Logo } from "../asset/logo.svg";

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const clickHandle = (goto) => {
    navigate(`${goto.path}`);
  
    setActiveNav(goto.name);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveNav("home");
    }else {
        setActiveNav(location.pathname.split("/")[1])
    }
  }, [location]);
  return (
    <div className="navbar_wrapper">
      <div className="logo_container">
        <Logo className="logo" />
      </div>
      <div className="panel">
        {navbarData.map((e , index) => {
          return <h3 key={index} className={e.name === activeNav ? "active_nav": ""} onClick={() => clickHandle(e)}>{e.label}</h3>;
        })}
      </div>
    </div>
  );
}

export default Navbar;
