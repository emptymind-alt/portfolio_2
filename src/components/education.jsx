import React from "react";
import CardComponent from "./card-component";
import inter from "../assets/img/khaira.jpg";
import school from "../assets/img/sch.jpg";
import pg from "../assets/img/rav.jpg";
import ug from "../assets/img/fm.jpg";
import { Fade } from "react-reveal";
import Roll from 'react-reveal/Roll';
import LaunchIcon from '@mui/icons-material/Launch';

const education = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="education"
    >
      
      <Roll left cascade>
        <section className="div-1">
          <h1 className="heading">My education...</h1>
          <div>
            {EducationData.map((data, ind) => {
              const {  external, img, title, text, } = data;
              return (
                
                <CardComponent
                  key={data + ind}
                
                 external={external}
                  img={img}
                  title={title}
                  text={text}
               
                />
              );
            })}
          </div>
          
        </section>
      </Roll>
    </div>
  );
};

export default education;

const EducationData = [
  {
    title: "Base Education",
    img: school,
   text: "basic education of my career.",
 external :"www.sundarpur.com"
    
  },
  {
    title: "Intermediate",
    img: inter,
    text: "science with PCM",
  },
  {
    title: " Graduation",
    img: ug,
    text: "FakirMohan university " 
   },
  {
    title: "post Graduation",
    img: pg,
    text: "Ravenshaw university " 
   },
  
];