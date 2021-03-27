import React from "react";
import web from "../src/images/img2.jpg";

import Common from "./Common";
const Home =() =>{
    return(
      <>
     <Common name='Grow your business with' 
      sname='US'
       imgsrc={web} 
       visit="/service"
       btname="Get Started"/>
      </>
    );
  }
  
     export default Home;