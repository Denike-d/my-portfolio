import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="heroSection">
        <div className="heroSection__text">
          <div className="heroSection__bio">
            <p>Hello, World</p>
            <h2>I am Adenike Ogunmodede</h2>
            <p>A Frontend Web Developer || Designer</p>
            <p className="heroSection__btn">Get in touch</p>
          </div>
        </div>
        {/* <div className="heroSection__image">
          <img src={Adenike} className="heroSection__img" />
        </div> */}
      </div>
    </Fragment>
  );
}
