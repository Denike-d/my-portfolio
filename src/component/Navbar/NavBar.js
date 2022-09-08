import React, { Fragment } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import About from "../About/About";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <Fragment>
      <nav className="navbar">
        <h5 style={{ color: "#E835AA" }}>Adenike .O.</h5>
        <ul>
          <li>
            <AnchorLink href="#">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">About me</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project">Portfolio</AnchorLink>
          </li>
        </ul>
        <p>
          <AnchorLink href="adenicks727@gmail.com">Contact me</AnchorLink>
        </p>
      </nav>
      <div>
        <div></div>
      </div>
    </Fragment>
  );
}
