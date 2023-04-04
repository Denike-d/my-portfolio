import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./About.scss";

export default function About() {
  return (
    <Fragment>
      <hr style={{ margin: "3rem" }}></hr>
      <div className="about" id="about">
        <div className="about__bio">
          <div className="about__text">
            <h3 style={{ color: "black" }}>About Me</h3>
            <div>
              <p style={{ fontSize: "1.2rem" }} id="text">
                My name is Adenike Ogunmodede, a Frontend Developer based in
                Nigeria. I enjoy building products that are both attractive and
                effective and offer satisfying user experiences.
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
                Aside from being a Frontend Developer, I engage in building tech
                communities in Nigeria.
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

        <div className="about-skills" id="skills">
          <div className="skill">
            <p>
              <strong>My Skills</strong>
            </p>
            <p>JavaScript</p>
            <p>React Js</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS/SCSS</p>
            <p>Tailwind CSS</p>
            <p>Firebase</p>
          </div>
          <div className="work-experience">
            <p>Work Experience</p>
            <hr></hr>
            <p>Frontend developer, Reimnet, 02/2021 - 06/2021</p>
            <p>Frontend developer, Reimnet, 02/2021 - 06/2021</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
