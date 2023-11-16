import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
  faWhatsapp
  
  
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";




const Cover = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hi, I am </h1>
              <h1 className="head-div-second-text">Manas Sahoo</h1>
              <h1 className="head-div-third-text">
              code code ...
              </h1>
              <p className="head-div-fourth-text">
                I'm a Javascript developer and competitive coder based in India,
                with keen interest and skills in building beautiful and eye
                catching websites.
              </p>
            </section>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <span className="scroll-btn">
          <a href="#home">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      </Fade>
      <div className="social-media">
        <Fade left cascade>
          <ul className="social-media-list">
            {SocialData.map((data, ind) => {
              return (
                <li key={data + ind}>
                  <a
                    className="social-media-list-link"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.icon} className="media-icons" />
                  
                  </a>
                </li>
              
              );
            })}
          </ul>
        
        </Fade>
      </div>
    </div>
  );
};

export default Cover;

const SocialData = [
  {
    link: "https://github.com/emptymind-alt",
    icon: faGithub,
  },
  {
    link: "https://www.linkedin.com/in/siva",
    icon: faLinkedin,
  },
  {
    link: "https://www.hackerrank.com/manas",
    icon: faHackerrank,
  },
  {
    link: "9348158271",
    icon: faWhatsapp,
  },
];
