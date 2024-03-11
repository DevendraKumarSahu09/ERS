import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

import { TiHome } from "react-icons/ti";
import { BsSendFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { IoInformationCircle } from "react-icons/io5";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  // let location = useLocation();
  // let navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("PMTusername");
  //   navigate("/login");
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navElement">
        <li className="date">{currentDate}</li>
        <li>
          <Link className="nav-link navLogo" to="/">
            <i className="animation"></i>Emergency Response
            <i className="animation"></i>
          </Link>
        </li>
        <div className="navSubEle">
          <li>
            <Link
              className={`nav-link navLink ${
                location.pathname === "/" ? "active" : ""
              }`}
              aria-current="page"
              to="/"
            >
              <TiHome style={{ color: "#0d9ed9", fontSize: "22px" }} />
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/respond">
              <BsSendFill style={{ color: "#0d9ed9", fontSize: "16px" }} />
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/info">
              <IoInformationCircle
                style={{ color: "#0d9ed9", fontSize: "20px" }}
              />
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              <FcAbout />
            </Link>
          </li>

          {/* {!localStorage.getItem("token") ? (
            <form className="d-flex" role="search">
              <Link className="btn btn-nav" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-nav" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <div className="uname">
              <span className="nav-uname">
                <RiAdminFill />
                {localStorage.getItem("PMTusername")}
              </span>
              <button onClick={handleLogout} className="btn">
                <TbLogout2 className="iconNav2" />
                Logout
              </button>
            </div>
          )} */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
