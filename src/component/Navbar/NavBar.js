import React, { Fragment } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Fragment>
      <nav className="navbar">
        <h3>O.A</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <p>
          <a href="#">Contact me</a>
        </p>
      </nav>
      <div>
        <div></div>
      </div>
    </Fragment>
  );
}
