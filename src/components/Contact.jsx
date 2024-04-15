import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";


const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <div className="items">
            {" "}
            <FiPhoneCall className="icons"/>{" "}
          </div>
          <div className="items">
            {" "}
            <SiGmail className="icons"/>{" "}
          </div>
          <div className="items">
            {" "}
            <CiLinkedin className="icons"/>{" "}
          </div>
          <div className="items">
            {" "}
            <FaGithub className="icons"/>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
