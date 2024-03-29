import React, { Fragment } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import About from "../About/About";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <div className="header">
      <nav className="navbar">
        <h5>Adenike Ogunmodede</h5>
        <ul>
          <li>
            <AnchorLink href="#">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1DL7a4Wv5uViW_JQ3ZWub88wSp4LmwVcb/view?usp=sharing">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/Denike-d">Github</a>
          </li>
        </ul>
      </nav>
      <div>
        <div></div>
      </div>
    </div>
  );
}
