import React, { Component } from "react";
import {} from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <div className="custom-navbar background-light">
        <p className="custom-navbar-title">Daniel Viramontes</p>
        <ul className="custom-navbar-links">
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="#aboutme">
              About Me
            </a>
          </li>
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="#myskills">
              My Skills
            </a>
          </li>
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="custom-navbar-li">
            <a
              className="custom-navbar-link primary"
              href="https://drive.google.com/file/d/1EwAwsE3t8-7Ql-wlDDsV0cOV6Ozdf5Kl/view?usp=sharing"target="_black"
              >
                Resume
              </a>
            </li>
            <li className="custom-navbar-li">
            <a id="contactMeBtn" href="#contactme">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CustomNavbar;