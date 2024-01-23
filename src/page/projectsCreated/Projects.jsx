import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import digimed3 from '../../assets/digimed3.png';
import food1 from '../../assets/food1.png';
import Markeplace from '../../assets/Markeplace.png';
import PortafolioPrueba from '../../assets/PortafolioPrueba.png';

function Projects() {
  const projectsData = [
    {
      image: digimed3,
      alt: 'digimed3',
      description: 'Proyecto creado con el objetivo de crear una plataforma que ofrezca una forma transformadora de gestionar recetas médicas...',
    },
    {
      image: food1,
      alt: 'food1',
      description: 'Proyecto creado para dar a los clientes la oportunidad de probar la comida colombiana y poder hacer pedidos en línea o ver el menú disponible.',
    },
    {
      image: Markeplace,
      alt: 'Markeplace',
      description: 'Creación de un mercado en línea donde el usuario puede realizar un filtro según lo que desee buscar para comprar en línea.',
    },
    {
      image: PortafolioPrueba,
      alt: 'PortafolioPrueba',
      description: 'Primer portafolio creado, lo llamé portafolio de prueba porque estaba ensayando la creación de mi portafolio.',
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