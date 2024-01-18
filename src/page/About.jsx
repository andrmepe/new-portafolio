import React from "react";
import Profile2 from "../assets/Profile2.png";
import Logo4 from "../assets/Logo4.png";
import { Link } from "react-scroll";
import "../styles/About.css";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="content-container">
        <img className="profile-image" src={Profile2} alt="Profile" />
        <div className="text-container">
          <div className="text">
            <h1>Hi, I'm Andres</h1>
            <h2>Full Stack Developer</h2>
            <h3>I'm a passionate web developer with experience in creating compelling and functional websites</h3>
            <div>
              <Link to="contact" smooth={true} duration={500}>
                <button style={{border:'solid', borderColor:'black'}}>Contact me!</button>
              </Link>
            </div>
          </div>
          <img className="logo-image" src={Logo4} alt="LogoAndres" />
        </div>
      </div>
    </div>
  );
}

export default About;