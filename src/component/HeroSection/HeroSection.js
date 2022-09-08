import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./HeroSection.scss";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="heroSection" id="home">
        <div className="heroSection__text">
          <div className="heroSection__bio">
            <p>Hello, World</p>
            <h2>I am Adenike Ogunmodede</h2>
            <p>A Frontend Web Developer || Designer</p>
            <div className="heroSection__button">
              <a href="#">
                <p className="heroSection__btn">Get in touch</p>
              </a>

              <a href="https://drive.google.com/file/d/14toLVxqBZxCPATrBjf_eSWzf2eDDTXzj/view?usp=sharing">
                <p className="heroSection__btn-cv">
                  Download Cv
                  <span style={{ marginLeft: "4px" }}>
                    {<ArrowDownTrayIcon width={16} />}
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="heroSection__image">
          <img src={Adenike} className="heroSection__img" />
        </div> */}
      </div>
    </Fragment>
  );
}
