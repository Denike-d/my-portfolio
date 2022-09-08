import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cover from "./Cover.svg";
import Counter from "./Counter.svg";
import "./Project.scss";

function Project() {
  return (
    <div className="carousel" id="project">
      <h4 style={{ color: "#E835AA", marginTop: "4rem" }}>My Projects</h4>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            src={Cover}
            className="d-block w-100 h-50"
            // src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Counter} alt="Second slide" />

          <Carousel.Caption>
            <a href="https://word-counter-woad.vercel.app/">
              <h5>View Website</h5>
            </a>
            <p>
              A counter application focused on counting the number of word,
              sentences, lines and characters of a text built with React js.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cover} alt="Third slide" />

          <Carousel.Caption>
            <a href="#">
              <h5>View Website</h5>
            </a>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Project;
