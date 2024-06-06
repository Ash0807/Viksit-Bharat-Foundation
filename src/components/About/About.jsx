import React from "react";
import "./About.css";
import about_img from "../../assets/about.gif";
import play_icon from "../../assets/play-icon.gif";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT VIKSIT-BHARAT</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>A key goal is to make India a leading economic power, potentially reaching the rank of the world's third-largest economy within the next few years. This involves fostering inclusive economic participation for all citizens. Viksit Bharat aims to create a society with equal opportunities, improved healthcare, quality education, and a high standard of living for everyone.</p>
        <p>The vision acknowledges the importance of environmental protection. Initiatives are underway to promote renewable energy use, water conservation, and a cleaner, greener India. Creating a strong and efficient government framework is crucial to achieving the overall goals. This includes streamlined bureaucracy, improved infrastructure, and robust legal systems.</p>
      </div>
    </div>
  );
};

export default About;
