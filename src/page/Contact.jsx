import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" style={{ paddingTop: "50px", textAlign:'center', marginBottom:'20px', color:'#100786' }}>
      <h2><strong>Andres Mejia Perez</strong></h2>
      <p><strong>Full Stack Developer</strong></p>
      <p><strong>Phone: 0451049712</strong></p>
      <p><strong>E-mail: </strong><a href="mailto:anmepe.sud@gmail.com">anmepe.sud@gmail.com</a></p>
      <p><strong>Redes sociales:</strong></p>
      <a href="https://www.facebook.com/andres.m.perez.581?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{color:'blue'}} size={30} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{color:'#DA4325', marginLeft:'20px'}} size={30} />
      </a>
      <a href="https://www.youtube.com/channel/UC-IAsKi65gBrfeFVnUKD2lQ" target="_blank" rel="noopener noreferrer">
        <FaYoutube style={{color:'red', marginLeft:'20px'}} size={30} />
      </a>
      <a href="https://www.linkedin.com/in/andres-mejia-374483240/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{color:'blue', marginLeft:'20px'}} size={30} />
      </a>
      <a href="https://wa.me/451049712" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp style={{color:'green', marginLeft:'20px'}} size={30} />
      </a>
    </div>
  );
}

export default Contact;
 