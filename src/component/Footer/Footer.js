import { ArrowLongRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Gmail from "./Gmail.svg";
import Instagram from "./Instagram.svg";
import Twitter from "./Twitter.svg";
import LinkedIn from "./LinkedIn.svg";
import Github from "./Github.svg";
import React, { Fragment } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <Fragment>
      <div className="footer">
        <div>
          <h6 style={{ color: "#E835AA" }}>Adenike Ogunmodede</h6>
        </div>
        <div className="contact">
          <p>Contact me:</p>
          <div class="contact__image">
            {
              <EnvelopeIcon
                width={18}
                height={18}
                style={{ marginLeft: "6px", color: "#E835AA" }}
              />
            }
            <span style={{ marginLeft: "6px", textDecoration: "none" }}>
              <Mailto
                style={{ marginLeft: "6px", textDecoration: "none" }}
                email="adenicks727@gmail.com"
                subject=""
                body=""
              >
                @adenicks727@gmail.com
              </Mailto>
            </span>
          </div>
        </div>

        <div className="socials">
          <p>Connect with me:</p>
          <div className="social__images">
            <a href="">
              <img
                src={Instagram}
                alt="gmail"
                width={20}
                height={20}
                style={{ marginLeft: "8px" }}
              />
            </a>
            <a href="">
              <img
                src={Twitter}
                alt="twitter"
                width={20}
                height={20}
                style={{ marginLeft: "8px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/adenike-ogunmodede-9ab4a6178/">
              <img
                src={LinkedIn}
                alt="linkedin"
                width={20}
                height={20}
                style={{ marginLeft: "8px" }}
              />
            </a>
            <a href="">
              <img
                src={Github}
                alt="github"
                width={20}
                height={20}
                style={{ marginLeft: "8px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
