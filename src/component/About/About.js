import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./About.scss";

export default function About() {
  return (
    <Fragment>
      <div className="about">
        <div className="about__image">
          <img src={Adenike} className="about__img" />
        </div>
        <div className="about__bio">
          <div className="about__text">
            <h3>About Me</h3>
            <p>
              ia msbhfb jjrb djjdjjdjdjdjjdjjjb jjjs s jj djjdb fjjbbf
              <br />
              jujjccccccccccccccccccccccc jujjccccccccccccccccccccccckk
              <br />
              jddddddddddddddddddddddddd jjddddddddddddddddddddddd
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
