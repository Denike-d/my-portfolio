import React from "react";
import "./Works.scss";
import Pictel from "./Pictel.JPG";
import Embrace from "./Embrace.JPG";
import Countries from "./Countries.JPG";
import Github from "./Github.JPG";
import Shop from "./Shop.JPG";
import Query from "./Query.JPG";

export default function Works() {
  return (
    <div className="project-container">
      <h3 style={{ fontWeight: 600 }}>Projects</h3>
      <div className="project">
        <div className="project-work">
          <div className="image">
            <img src={Pictel} width={500} height={240} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Pictel</h5>
            <p>Pictel is a free stock image website.</p>
            <p>
              <strong>React Js, SCSS, Pexels API</strong>
            </p>
            <div className="view">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://pictel.vercel.app/">View website</a>
              </div>
              <a href="https://github.com/Denike-d/Pictel">Github</a>
            </div>
          </div>
        </div>
        <div className="project-work">
          <div className="image">
            <img src={Embrace} width={500} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Embrace</h5>
            <p>Embrace is a static landing page.</p>
            <p>
              <strong>React Js, SCSS</strong>
            </p>
            <div className="view">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://landing-page-ecru-delta.vercel.app/">
                  View website
                </a>
              </div>
              <a href="https://github.com/Denike-d/Landing-page">Github</a>
            </div>
          </div>
        </div>
        <div className="project-work">
          <div className="image">
            <img src={Shop} width={500} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Shopty</h5>
            <p>Shopty is an ecommerce website</p>
            <p>
              <strong>React Js, SCSS, Firebase</strong>
            </p>
            <div className="view">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://avion-store.vercel.app/">View website</a>
              </div>

              <a href="https://github.com/Denike-d/OnlineStore">Github</a>
            </div>
          </div>
        </div>
        <div className="project-work">
          <div className="image">
            <img src={Countries} width={500} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Countries</h5>
            <p>Countries displays the list of countries in the world.</p>
            <p>
              <strong>React Js, SCSS, API</strong>
            </p>
            <div className="view">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://countries-tan-eta.vercel.app">View website</a>
              </div>
              <a href="https://github.com/Denike-d/countries">Github</a>
            </div>
          </div>
        </div>
        <div className="project-work">
          <div className="image">
            <img src={Github} width={500} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Github users</h5>
            <p>This web application is used to find github users</p>
            <p>
              <strong>React Js, CSS, Github API</strong>
            </p>
            <div className="view">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://github-users-two-theta.vercel.app/">
                  View website
                </a>
              </div>
              <a href="https://github.com/Denike-d/Git-users-profile">Github</a>
            </div>
          </div>
        </div>
        <div className="project-work">
          <div className="image">
            <img src={Query} width={500} />
          </div>
          <div className="project-details">
            <h5 style={{ fontWeight: "bold" }}>Query</h5>
            <p>Query is a search engine</p>
            <p>
              <strong>React Js, CSS, Google API</strong>
            </p>
            <div className="view">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://query-tawny.vercel.app/">View website</a>
              </div>
              <a href="https://github.com/Denike-d/Websearch">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
