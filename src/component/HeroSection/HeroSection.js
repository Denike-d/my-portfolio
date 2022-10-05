import React, { Fragment } from "react";
import Adenike from "./Adenike.jpg";
import "./HeroSection.scss";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection__text">
        <div className="heroSection__bio">
          <motion.p initial={{ y: -250 }} animate={{ y: 0 }}>
            Hello, World
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            I am Adenike Ogunmodede
          </motion.h2>
          <motion.p iniitial={{ x: "-100vw" }} animate={{ x: 0 }}>
            A Frontend Web Developer || Designer
          </motion.p>
          <div className="heroSection__button">
            <a href="#">
              <p className="heroSection__btn">Get in touch</p>
            </a>

            <a href="https://drive.google.com/file/d/14toLVxqBZxCPATrBjf_eSWzf2eDDTXzj/view?usp=sharing">
              <p className="heroSection__btn-cv">
                Download Cv
                {/* <span style={{ marginLeft: "4px" }}>
                  {<ArrowDownTrayIcon width={16} />}
                </span> */}
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="heroSection__image">
          <img src={Adenike} className="heroSection__img" />
        </div> */}
    </div>
  );
}
