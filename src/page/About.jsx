import React from "react";
import Profile from "../assets/Profile.png";
import { Link } from "react-scroll";
import "../styles/About.css";

function About() {
  return (
    <div id="about" className="about-container">
      <img className="profile-image" src={Profile} alt="Profile" />
      <div className="about-content">
       <div>
        <h1>Hi, I'm Andres</h1>
        <h2>Full Stack Developer</h2>
        <h3>I'm a passionate web developer with experience in creating compelling and functional websites</h3>
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button>Contact me!</button>
          </Link>
        </div>
       </div>
      </div>
    </div>
  );
}

export default About;