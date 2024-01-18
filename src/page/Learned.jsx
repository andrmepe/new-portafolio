import React from "react";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.png";
import nodejsLogo from "../assets/nodejsLogo.png";
import MysqlLogo from "../assets/MysqlLogo.png";
import muiLogo1 from "../assets/muiLogo1.png";
import tailwindLogo from "../assets/tailwindLogo.png";


function Learned() {
  return (
    <div id="learned" style={{ paddingTop: "40px", textAlign:'center', color:'#100786'}}>
      <h2>Technologies learned for website development</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={htmlLogo} alt="HTML-Logo"/>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={cssLogo} alt="cssLogo"/>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={jsLogo} alt="jsLogo"/>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={nodejsLogo} alt="nodejsLogo"/>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={MysqlLogo} alt="MysqlLogo"/>
      <div>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={muiLogo1} alt="muiLogo1"/>
      <p style={{ margin: '0', fontWeight: 'bold', fontSize:'30px'}}>Material UI</p>
      </div>
      <div>
      <img style={{width:'200px', height:'auto', margin: '10px'}} src={tailwindLogo} alt="tailwindLogo"/>
      <p style={{ margin: '0', fontWeight: 'bold', fontSize:'30px' }}>Tailwind.css</p>
      </div>
      </div>        
    </div>
  );
}

export default Learned
 