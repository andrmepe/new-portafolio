import React from "react";
import { useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo3 from '../assets/Logo3.png';
import learnedIcon from '../assets/learned.png';
import contactIcon from '../assets/contact.png';
import aboutIcon from '../assets/about.png';
import projectIcon from '../assets/project.png';


function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSection, setSelectedSection] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      setSelectedSection(sectionId);
    }
    handleMenuClose(); // Cerrar el menú móvil después de hacer clic en un enlace
  };

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#E8E7E7", zIndex: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
      <img style={{width:'120px', height:'Auto', marginLeft:'20px'}} src={Logo3} alt="LogoAndres"/>

      {isMobile ? (
        // Barra de navegación para dispositivos móviles
        <div>
          <IconButton style={{color:'#100786', marginRight:'20px'}}
            size="large"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => scrollToSection("about")}
            style={selectedSection === "about" ? { fontWeight: 'bold', fontSize: '1.3em' } : {}}>
              <img src={aboutIcon} alt="About" style={{ width:'30px', height:'auto', marginRight: '10px' }} />
              About
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("learned")}
            style={selectedSection === "learned" ? { fontWeight: 'bold', fontSize: '1.3em' } : {}}>
              <img src={learnedIcon} alt="Learned" style={{width:'30px', height:'auto', marginRight: '10px' }} />
              Learned
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}
            style={selectedSection === "projects" ? { fontWeight: 'bold', fontSize: '1.3em' } : {}}>
              <img src={projectIcon} alt="Projects" style={{ width:'30px', height:'auto',marginRight: '10px' }} />
              Projects
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("contact")}
            style={selectedSection === "contact" ? { fontWeight: 'bold', fontSize: '1.3em' } : {}}>
              <img src={contactIcon} alt="Contact" style={{width:'30px', height:'auto', marginRight: '10px' }} />
              Contact
            </MenuItem>
          </Menu>
        </div>
      ) : (
        // Botones para pantallas más grandes
        <div style={{ display: "flex", gap: "10px" ,flexDirection: "row", marginRight:'20px' }}>
          <button style={{background:'#5ebdeb'}} onClick={() => scrollToSection("about")}>About</button>
          <button style={{background:'#5ebdeb'}} onClick={() => scrollToSection("learned")}>Learned</button>
          <button style={{background:'#5ebdeb'}} onClick={() => scrollToSection("projects")}>Projects</button>
          <button style={{background:'#5ebdeb'}} onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;