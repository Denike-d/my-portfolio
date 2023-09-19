import React, { Fragment } from "react";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection__text">
        <p className="name">Hello! I am Adenike,</p>
        <br />
        <p
          style={{
            marginTop: "-45px",
          }}
        >
          A passionate frontend developer specializing in creating visually
          captivating and functional websites.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "normal",
            marginTop: "-35px",
          }}
          id="text"
        >
          Aside from being a Frontend Developer, I engage in building tech
          communities in Nigeria.
          {/* My name is Adenike Ogunmodede, a Frontend Developer based in Nigeria.
          I enjoy building products that are both attractive and effective and
          offer satisfying user experiences. */}
          <br />
        </p>
      </div>
    </div>
  );
}
