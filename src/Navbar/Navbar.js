import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.css";
import logo from "./logo.jpg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand logo-img" href="#">
          <img src={logo} alt="logo" style={{ height: "15%", width: "15%" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li
              className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownClose}
            >
              <a
                className="nav-link"
                href="#"
                id="servicesDropdown"
                role="button"
              >
                Menu
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="servicesDropdown"
              >
                <a className="dropdown-item" href="#">
                  Menu 1
                </a>
                <a className="dropdown-item" href="#">
                  Menu 2
                </a>
                <a className="dropdown-item" href="#">
                  Menu 3
                </a>
                <a className="dropdown-item" href="#">
                  Menu 4
                </a>
                <a className="dropdown-item" href="#">
                  Menu 5
                </a>
                <a className="dropdown-item" href="#">
                  Menu 6
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Items
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="shopping-cart">
                  {" "}
                  <ShoppingCartIcon />
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bell">
                  <NotificationsIcon />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
