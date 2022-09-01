import { Fragment } from "react";
import "./Skills.scss";

export default function Skills() {
  return (
    <Fragment>
      <div className="skills">
        <hr></hr>
        <h3>My Skills</h3>
        <div className="skills__type">
          <div className="skills__graphics">
            <h4>Graphics Design</h4>
            <p>As a Graphics Designer, I create fliers.</p>
          </div>
          <div className="skills__frontend">
            <h4>Frontend Development</h4>
            <p>As a Graphics Designer, I create fliers.</p>
          </div>
          <div className="skills__uiux">
            <h4>UI/UX Design</h4>
            <p>As a Graphics Designer, I create fliers.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
