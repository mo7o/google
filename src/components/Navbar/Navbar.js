import React, { Component } from "react";

import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="wrapper-navbar text-right">
        <div className="wrapper-links">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <span className="wrapper-icons">
            <a href="#">
              <img className="menu-icon" src="menu-icon.png" alt="user-img" />
            </a>
            <a href="#">
              <img
                className="avatar-img"
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="user-img"
              />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
