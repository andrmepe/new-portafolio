import React from "react";
import { useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo1 from '../assets/Logo1.png';

function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    }
    handleMenuClose(); // Cerrar el menú móvil después de hacer clic en un enlace
  };

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "black", zIndex: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
      <img style={{width:'120px', height:'Auto', marginLeft:'20px'}} src={Logo1} alt="LogoAndres"/>

      {isMobile ? (
        // Barra de navegación para dispositivos móviles
        <div>
          <IconButton style={{color:'white', marginRight:'20px'}}
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
            <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollToSection("learned")}>Learned</MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>
            <MenuItem onClick={() => scrollToSection("contact")}>Contact</MenuItem>
          </Menu>
        </div>
      ) : (
        // Botones para pantallas más grandes
        <div style={{ display: "flex", gap: "10px" ,flexDirection: "row", marginRight:'20px' }}>
          <button style={{background:'#2a9edd'}} onClick={() => scrollToSection("about")}>About</button>
          <button style={{background:'#2a9edd'}} onClick={() => scrollToSection("learned")}>Learned</button>
          <button style={{background:'#2a9edd'}} onClick={() => scrollToSection("projects")}>Projects</button>
          <button style={{background:'#2a9edd'}} onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;