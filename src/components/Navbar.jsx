import React from "react";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff", zIndex: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
      <h1>Navbar y que</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("learned")}>Learned</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </div>
  );
}
export default Navbar;