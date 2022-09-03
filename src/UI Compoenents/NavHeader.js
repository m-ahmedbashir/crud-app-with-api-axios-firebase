import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <div>
      <div className="container my-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <div className="navbar-brand">Contact App</div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add">
                    <a className="nav-link">Add Data</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin">
                    <a className="nav-link ">Sign In</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">
                    <a className="nav-link ">Sign Up</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavHeader;
