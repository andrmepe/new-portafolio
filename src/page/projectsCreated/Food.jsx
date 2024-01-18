import React from "react";
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import food4 from '../../assets/food4.png';
import food5 from '../../assets/food5.png';


const Food = ()=>{
    return(

<div style={{display:'flex', flexDirection:'column',alignItems: "center", 
textAlign: "center", maxWidth:'1350px',minWidth:'350px', background:'black'}}>
    <div style={{marginTop:'20px'}}>
    {/* <Link style={{color:'#0afdd7'}} to="/ProyectosCreados"> Return to created projects </Link> */}
    </div>
    <h1 style={{color:'white'}}>COLOMBIAN FOOD</h1>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={food1}
    alt='food1'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={food2}
    alt='food2'
    style={{ width: '100%', height: '100%'}}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={food3}
    alt='food3'
    style={{ width: '100%', height: '100%'}}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={food4}
    alt='food4'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={food5}
    alt='food5'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{marginBottom:'20px'}}>
    {/* <Link style={{color:'#0afdd7'}} to="/ProyectosCreados"> Return to created projects </Link> */}
    </div>
</div>
    )
}

export default Food