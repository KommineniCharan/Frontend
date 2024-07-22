import { Link } from "react-router-dom";
import React from "react";
import Logo from "./images/logo.jpg";

let Nav = () => {
  return (
    <>
      <nav className="nav navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src={Logo} alt="Logo" className="navbar-brand img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="#mynavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Message">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/One">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Destructure">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
