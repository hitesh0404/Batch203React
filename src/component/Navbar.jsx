import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/products" aria-current="page">
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter" aria-current="page">
                Counter App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/newcounter"
                aria-current="page"
              >
                New Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="/">
                  Action 1
                </a>
                <a className="dropdown-item" href="/">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      
      <Outlet />
    
    </>
  );
}

export default Navbar;