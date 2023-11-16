import React from 'react';
import {Container} from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const CardComponent = ({github,external,img,title,text,skills}) => {

    return (
      <Container>
        <div className="container card my-5">
          <ul className="ul">
          {github && (
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fill: "black" }} />
              </a>
            </li>
             )}
            {external && (
              <li>
                <a href={external} target="_blank" rel="noopener noreferrer">
                  <LaunchIcon style={{ fill: "black" }} />
                </a>
              </li>
            )}
          </ul>
          <img src={img} alt="img" />
          <div className="overlay"></div>
          <div className="con-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{skills}</p>
          </div>
        </div>
      </Container>
    );
}

export default CardComponent;