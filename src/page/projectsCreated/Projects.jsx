import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import digimed3 from '../../assets/digimed3.png';
import food1 from '../../assets/food1.png';
import Markeplace from '../../assets/Markeplace.png';
import PortafolioPrueba from '../../assets/PortafolioPrueba.png';
import workflow1 from '../../assets/workflow1.png';

function Projects() {
  const projectsData = [
    {
      image: workflow1,
      alt: 'workflow',
      description: (
        <div style={{color:'#41bcac'}}>
        Our web platform connects users with specialized professionals, simplifying the search and hiring of services efficiently and cost-effectively. Watch the project on YouTube:  
        <a href="https://www.youtube.com/watch?v=QznoBzjFSeM" target="_blank" rel="noopener noreferrer">
          Workflow Video
        </a> see more about the project
      </div>
      )
    },
    {
      image: digimed3,
      alt: 'digimed3',
      description: (
        <div  style={{color:'#1376f8'}}>
        Project created with the aim of developing a platform that provides a transformative way to manage medical prescriptions. Watch the project on YouTube:  
        <a href="https://www.youtube.com/watch?v=RvSBdnnmsh0" target="_blank" rel="noopener noreferrer">
          Digimed Video
        </a> see more about the project
      </div>
      )
    },
    {
      image: food1,
      alt: 'food1',
      description: (
        <div style={{color:'black'}}>
          Project created to give customers the opportunity to taste Colombian cuisine and place orders online or view the available menu.
        </div>
      ),
    },
    {
      image: Markeplace,
      alt: 'Markeplace',
      description: (
        <div style={{color:'#1376f8'}}>
          Creation of an online marketplace where the user can apply filters based on what they wish to search for and purchase online.
        </div>
      ),
    },
    {
      image: PortafolioPrueba,
      alt: 'PortafolioPrueba',
      description: (
        <div style={{color:'#4831d3'}}>
          First portfolio created, I called it a test portfolio because I was practicing the creation of my portfolio.
        </div>
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="projects" style={{ paddingTop: "40px", textAlign: 'center', backgroundColor:'#E0E0E1' ,color: '#100786', maxWidth: '100%', margin: '0 auto' }}>
      <h2>Projects Section</h2>
      <Slider {...settings} style={{ maxWidth: '90vw', margin: '0 auto' }}>
        {projectsData.map((project, index) => (
          <div key={index} style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div style={{ width: '100%', maxWidth: '600px', height: 'auto', margin: '0 auto' }}>
              <img
                src={project.image}
                alt={project.alt}
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              />
            </div>
            <p style={{ color: '#100786', fontWeight: 'bold', maxWidth: '600px', margin: '0 auto', padding: '0 10px' }}>
              {project.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;