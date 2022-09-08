import { Fragment } from "react";
import "./Skills.scss";
import CssIcon from "./CssIcon.svg";
import JavaScriptIcon from "./JavaScriptIcon.svg";
import ReactIcon from "./ReactIcon.svg";

export default function Skills() {
  return (
    <Fragment>
      <div className="skills">
        <div className="skills__text">
          <div className="skills__details">
            <h4 style={{ color: "#E835AA" }}>What I do</h4>
            <p>
              I have knowledge in Graphics Design, Frontend Development and User
              Experience & User Interface Design.
            </p>
            <div className="skills__icons">
              <h5 style={{ color: "#E835AA" }}>Technologies I work with</h5>
              <div className="skills__icon">
                <img src={CssIcon} width={50} />
                <img
                  src={JavaScriptIcon}
                  width={50}
                  style={{ marginLeft: "2rem" }}
                />
                <img
                  src={ReactIcon}
                  width={50}
                  style={{ marginLeft: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="skills__type">
          {/* <div className="skills__graphics">
            <div className="skills__icon">
              <PaintBrushIcon width={24} height={24} />
            </div>
            <h5>Graphics Design</h5>
            <p>As a Graphics Designer, I create fliers.</p>
          </div> */}
          {/* <div className="skills__frontend">
            <div className="skills__icon">
              <CodeBracketIcon width={24} height={24} />
            </div>
            <h5>Frontend Development</h5>
            <p>
              As a Graphics Designer, I create fliers. ahfbfbbbbbbjjfkcjc
              bhfffffffffffffffff jffffffffffffffffffffffffff jffffffffffffffff
            </p>
          </div> */}
          {/* <div className="skills__uiux">
            <div className="skills__icon">
              <SparklesIcon width={24} height={24} />
            </div>
            <h5>UI/UX Design</h5>
            <p>As a Graphics Designer, I create fliers.</p>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
