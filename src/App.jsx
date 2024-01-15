import React from "react";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./page/About";
import Learned from "./page/Learned";
import Projects from "./page/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Learned />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;