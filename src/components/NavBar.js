import React from "react";
import { Fade } from "react-reveal";
import painting2 from "../media/painting-2.jpeg";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <Fade top>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-bs-controls="navbarTogglerDemo03"
            aria-bs-expanded="false"
            aria-bs-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <div
              className="logo"
              style={{ backgroundImage: `url(${painting2})` }}
            />
            <div className="text">
              <h3>The Art Bridge To Baghdad</h3>
              <h5>In Art We Unite</h5>
            </div>
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </nav>
  );
};

export default NavBar;
