import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import pdf from "../pdf/Resume.pdf";

const Contact = () => {
  return (
    <>
      <div className="container contact" id = "contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icons"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <a href={pdf} download="Resume.pdf" target="_blank" className="items">
            {" "}
            <FiPhoneCall className="icons" />{" "}
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inboxm"
            target="_blank"
            className="items"
          >
            {" "}
            <SiGmail className="icons" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/rajatyadav9315961569/"
            target="_blank"
            className="items"
          >
            {" "}
            <CiLinkedin className="icons" />{" "}
          </a>
          <a
            href="https://github.com/Rajat-yaduvanshi"
            target="_blank"
            className="items"
          >
            {" "}
            <FaGithub className="icons" />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
