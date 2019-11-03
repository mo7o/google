import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="inner-footer1">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link">India</a>
          </li>
        </ul>
      </div>
      <div className="inner-footer2">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Advertising
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Business
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              How Search works
            </a>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Privacy
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Terms
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
