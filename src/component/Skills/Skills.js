import { Fragment } from "react";
import "./Skills.scss";
import CssIcon from "./CssIcon.svg";
import JavaScriptIcon from "./JavaScriptIcon.svg";
import ReactIcon from "./ReactIcon.svg";

export default function Skills() {
  return (
    <div className="skills">
      <div>
        <p>I have experience working with these technologies:</p>
      </div>
      <div className="skill">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Tailwind CSS</p>
        <p>Firebase</p>
        <p>Redux</p>
      </div>
    </div>
  );
}
