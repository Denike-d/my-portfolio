import React, { Fragment } from "react";
import Agrifinace from "./Agrifinace.svg";
import "./Projects.scss";

export default function Projects() {
  return (
    <Fragment>
      <div className="projects">
        <h4>My Projects</h4>
        <div className="projects__type">
          <div className="projects__one">
            <img src={Agrifinace} alt="agriculural finace" width={350} />
            <div className="projects__info">
              <h3>Farmers Loan Application</h3>
              <p>
                trheb dhdgdf gdhj id dye edd hjd dhdhhnd vhhhhhhf hfffffffbdh
                kdkhgdgggdgdbbbbdg
              </p>
              <p className="projects__btn">
                <a href="#">View the project</a>
              </p>
            </div>
          </div>
          <div className="projects__two">
            <div className="projects__info">
              <h3>Farmers Loan Application</h3>
              <p>
                dgfbfjfj hehfve jwjjhvv gegggejjjjdn shdbfhfnf hshbfhhd hhhdbdb
                ghfbvhhjdhhdhejd
              </p>
              <p className="projects__btn">
                <a href="#">View the project</a>
              </p>
            </div>
            <img src={Agrifinace} alt="word count" width={350} />
          </div>
          <div className="projects__three">
            <img src={Agrifinace} alt="agriculural finace" width={350} />
            <div className="projects__info">
              <h3>Farmers Loan Application</h3>
              <p>
                tttttttttttttttttttttttttttttt fffffffffffffffffffffffff gggggb
                hhhhhhhhhhhhhhhhb ggggggggggggg yhrtdbdjjdnndgd gegge dddbfnjf{" "}
              </p>
              <p className="projects__btn">
                <a href="#">View the project</a>
              </p>
            </div>
          </div>
          {/* <div className="projects__four">
            <img src="" alt="agriculural finace" />
            <p></p>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
