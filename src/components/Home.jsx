import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Software Engineer @ VVDN TECHNOLOGIES PVT LTD | React.js | JavaScript | JSX | Material UI | REST APIs | Redux | jquery | HTML5 & CSS3 | BootStrap | Python",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id = "home">
        <div className="left" data-aos="zoom-in" data-aos-duration="1000">
          <h2 ref={typedRef}></h2>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-4"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img"
           data-aos="zoom-in-up"
           data-aos-duration="1000"
          >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
