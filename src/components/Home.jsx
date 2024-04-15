import React from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";

const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h2>
            Software Engineer @ VVDN TECHNOLOGIES PVT LTD | React.js
            | JavaScript | JSX | Material UI | REST APIs | Redux
            | jquery | HTML5 & CSS3 | BootStrap | Python
          </h2>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
