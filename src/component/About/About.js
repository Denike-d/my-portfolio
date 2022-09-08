import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./About.scss";

export default function About() {
  return (
    <Fragment>
      <div className="about" id="about">
        <div className="about__image">
          <img src={Adenike} width={500} className="about__img" />
        </div>
        <div className="about__bio">
          <div className="about__text">
            <h3 style={{ color: "#E835AA" }}>About Me</h3>
            <div>
              <p>
                My name is Adenike Ogunmodede, a Frontend Developer. I enjoy
                designing products that are both attractive and effective and
                offer satisfying user experiences.
                <br />
                <br />
                I previously worked at Reimnet, a Software Engineering company.
                While at Reimnet, I worked on a number of interesting projects.
                One of the projects I worked on, was a software application that
                manages the facilities of a Real Estate. The application allows
                users to request for service providers, receive quotations from
                service providers and also track the availability of a service
                provider. I built the project with two other developers using
                React js and Tailwind Css.
                <br />
                <br />
                Aside from being a Frontend Developer, I engage in tech
                community activities. I’m a volunteer in some tech community
                groups in my country.
              </p>
              {/* <h5>My Skills</h5>
              <p>
                I have knowledge in <span>Graphics Design, </span>
                Frontend Development and User Experience & User Interface
                Design.
              </p>
              <h6>Technologies I work with:</h6> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
