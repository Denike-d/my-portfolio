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
      <a
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Fragment>
      <hr style={{ margin: "2rem 7rem" }}></hr>
      <div className="footer">
        <div className="container">
          <div>
            <p style={{ fontWeight: "bold" }}>Contact</p>
            <div className="contact">
              <div class="contact__image">
                {
                  <EnvelopeIcon
                    width={18}
                    height={18}
                    style={{ color: "black" }}
                  />
                }
                <span style={{ marginLeft: "6px", textDecoration: "none" }}>
                  <Mailto
                    style={{
                      marginLeft: "6px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    email="adenicks727@gmail.com"
                    subject=""
                    body=""
                  >
                    @adenikedev@gmail.com
                  </Mailto>
                </span>
              </div>
            </div>

            <div className="socials">
              {/* <p>Socials</p> */}
              <div className="social__images">
                <a href="https://www.instagram.com/denike_dd/">
                  <img
                    src={Instagram}
                    alt="gmail"
                    width={20}
                    height={20}
                    style={{}}
                  />
                </a>
                <a href="https://twitter.com/Denike_dd">
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
                <a href="https://github.com/Denike-d">
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
            {/* <div>
              <p>Copyright </p>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
